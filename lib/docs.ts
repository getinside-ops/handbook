import fs from "fs";
import path from "path";

export interface DocMeta {
  title: string;
  description: string;
  parent?: string;
  nav_order?: number;
  has_children?: boolean;
}

export interface DocPage {
  slug: string[];
  meta: DocMeta;
  content: string;
  filePath: string;
}

const DOCS_DIR = path.join(process.cwd(), "docs/fr");

/**
 * Map from URL segments to folder names with numeric prefixes
 */
const SECTION_MAP: Record<string, string> = {
  decouvrir: "01-decouvrir",
  annonceurs: "02-annonceurs",
  distributeurs: "03-distributeurs",
  faq: "04-faq",
  ressources: "05-ressources",
};

const REVERSE_SECTION_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(SECTION_MAP).map(([k, v]) => [v, k])
);

function parseFrontmatter(raw: string): { meta: DocMeta; content: string } {
  const fmRegex = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/;
  const match = raw.match(fmRegex);

  if (!match) {
    return {
      meta: { title: "Untitled", description: "" },
      content: raw,
    };
  }

  const yamlBlock = match[1];
  const content = match[2];

  // Simple YAML parser for our known fields
  const meta: DocMeta = { title: "Untitled", description: "" };

  for (const line of yamlBlock.split("\n")) {
    const titleMatch = line.match(/^title:\s*(.+)$/);
    if (titleMatch) {
      meta.title = titleMatch[1].replace(/^["']|["']$/g, "");
    }
    const descMatch = line.match(/^description:\s*(.+)$/);
    if (descMatch) {
      meta.description = descMatch[1].replace(/^["']|["']$/g, "");
    }
    const parentMatch = line.match(/^parent:\s*(.+)$/);
    if (parentMatch) {
      meta.parent = parentMatch[1].replace(/^["']|["']$/g, "");
    }
    const navMatch = line.match(/^nav_order:\s*(\d+)/);
    if (navMatch) {
      meta.nav_order = parseInt(navMatch[1], 10);
    }
    const childMatch = line.match(/^has_children:\s*(true|false)/);
    if (childMatch) {
      meta.has_children = childMatch[1] === "true";
    }
  }

  return { meta, content };
}

/**
 * Clean markdown content: strip Jekyll-specific syntax and render basic HTML
 */
function cleanContent(content: string): string {
  let cleaned = content;

  // Remove Jekyll Kramdown classes like {: .fs-9 } or {: .fs-6 .fw-300 }
  cleaned = cleaned.replace(/\{:\s*\.[^}]+\}/g, "");

  // Remove Liquid tags like {% include ... %} and {% capture ... %} blocks
  cleaned = cleaned.replace(/\{%[\s\S]*?%\}/g, "");

  // Remove Liquid variable outputs
  cleaned = cleaned.replace(/\{\{[\s\S]*?\}\}/g, "");

  return cleaned.trim();
}

/**
 * Convert URL slug segments to a file path
 */
function slugToFilePath(slug: string[]): string | null {
  if (slug.length === 0) return null;

  // Map first segment to folder name
  const section = SECTION_MAP[slug[0]];
  if (!section) {
    // Try direct file at docs/fr level (e.g., quick-start)
    const directFile = path.join(DOCS_DIR, `${slug[0]}.md`);
    if (fs.existsSync(directFile)) return directFile;
    return null;
  }

  const restPath = slug.slice(1);

  if (restPath.length === 0) {
    // Section index
    const indexFile = path.join(DOCS_DIR, section, "index.md");
    if (fs.existsSync(indexFile)) return indexFile;
    return null;
  }

  // Try index.md in subdirectory first
  const subDir = path.join(DOCS_DIR, section, ...restPath);
  const indexInSubDir = path.join(subDir, "index.md");
  if (fs.existsSync(indexInSubDir)) return indexInSubDir;

  // Try as a direct file
  const directFile = path.join(DOCS_DIR, section, ...restPath.slice(0, -1), `${restPath[restPath.length - 1]}.md`);
  if (fs.existsSync(directFile)) return directFile;

  return null;
}

export function getDocPage(slug: string[]): DocPage | null {
  const filePath = slugToFilePath(slug);
  if (!filePath) return null;

  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { meta, content } = parseFrontmatter(raw);

    return {
      slug,
      meta,
      content: cleanContent(content),
      filePath,
    };
  } catch {
    return null;
  }
}

/**
 * Get all doc slugs for static generation
 */
export function getAllDocSlugs(): string[][] {
  const slugs: string[][] = [];

  function walkDir(dir: string, pathSegments: string[]) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        walkDir(path.join(dir, entry.name), [...pathSegments, entry.name]);
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        const name = entry.name.replace(".md", "");
        if (name === "index") {
          slugs.push(pathSegments);
        } else {
          slugs.push([...pathSegments, name]);
        }
      }
    }
  }

  // Walk each section
  for (const [urlKey, folderName] of Object.entries(SECTION_MAP)) {
    const sectionDir = path.join(DOCS_DIR, folderName);
    walkDir(sectionDir, [urlKey]);
  }

  // Top-level docs like quick-start
  const topLevel = fs.readdirSync(DOCS_DIR, { withFileTypes: true });
  for (const entry of topLevel) {
    if (entry.isFile() && entry.name.endsWith(".md")) {
      slugs.push([entry.name.replace(".md", "")]);
    }
  }

  return slugs;
}

/**
 * Get sidebar navigation structure for a section
 */
export interface NavItem {
  title: string;
  slug: string[];
  children?: NavItem[];
  nav_order?: number;
}

export function getSectionNav(sectionSlug: string): NavItem[] {
  const folderName = SECTION_MAP[sectionSlug];
  if (!folderName) return [];

  const sectionDir = path.join(DOCS_DIR, folderName);
  if (!fs.existsSync(sectionDir)) return [];

  const items: NavItem[] = [];

  const entries = fs.readdirSync(sectionDir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith(".md") && entry.name !== "index.md") {
      const raw = fs.readFileSync(path.join(sectionDir, entry.name), "utf-8");
      const { meta } = parseFrontmatter(raw);
      items.push({
        title: meta.title,
        slug: [sectionSlug, entry.name.replace(".md", "")],
        nav_order: meta.nav_order,
      });
    } else if (entry.isDirectory()) {
      const indexPath = path.join(sectionDir, entry.name, "index.md");
      if (fs.existsSync(indexPath)) {
        const raw = fs.readFileSync(indexPath, "utf-8");
        const { meta } = parseFrontmatter(raw);

        // Get children
        const children: NavItem[] = [];
        const subEntries = fs.readdirSync(path.join(sectionDir, entry.name), {
          withFileTypes: true,
        });
        for (const sub of subEntries) {
          if (sub.isFile() && sub.name.endsWith(".md") && sub.name !== "index.md") {
            const subRaw = fs.readFileSync(
              path.join(sectionDir, entry.name, sub.name),
              "utf-8"
            );
            const { meta: subMeta } = parseFrontmatter(subRaw);
            children.push({
              title: subMeta.title,
              slug: [sectionSlug, entry.name, sub.name.replace(".md", "")],
              nav_order: subMeta.nav_order,
            });
          } else if (sub.isDirectory()) {
            const subIndexPath = path.join(sectionDir, entry.name, sub.name, "index.md");
            if (fs.existsSync(subIndexPath)) {
              const subRaw = fs.readFileSync(subIndexPath, "utf-8");
              const { meta: subMeta } = parseFrontmatter(subRaw);
              children.push({
                title: subMeta.title,
                slug: [sectionSlug, entry.name, sub.name],
                nav_order: subMeta.nav_order,
              });
            }
          }
        }

        children.sort((a, b) => (a.nav_order ?? 99) - (b.nav_order ?? 99));

        items.push({
          title: meta.title,
          slug: [sectionSlug, entry.name],
          children: children.length > 0 ? children : undefined,
          nav_order: meta.nav_order,
        });
      }
    }
  }

  items.sort((a, b) => (a.nav_order ?? 99) - (b.nav_order ?? 99));
  return items;
}
