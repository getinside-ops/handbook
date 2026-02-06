interface MarkdownRendererProps {
  content: string;
}

/**
 * Simple server-side markdown to HTML renderer.
 * Handles headings, paragraphs, lists, bold, italic, links, code, hr, and HTML passthrough.
 */
function markdownToHtml(md: string): string {
  const lines = md.split("\n");
  const htmlLines: string[] = [];
  let inList = false;
  let listType: "ul" | "ol" = "ul";
  let inHtmlBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Detect HTML block start/end
    if (trimmed.startsWith("<div") || trimmed.startsWith("<section") || trimmed.startsWith("<table") || trimmed.startsWith("<dl") || trimmed.startsWith("<style")) {
      inHtmlBlock = true;
    }
    if (inHtmlBlock) {
      htmlLines.push(line);
      if (trimmed.startsWith("</div") || trimmed.startsWith("</section") || trimmed.startsWith("</table") || trimmed.startsWith("</dl") || trimmed.startsWith("</style")) {
        inHtmlBlock = false;
      }
      continue;
    }

    // Pass through HTML tags directly
    if (trimmed.startsWith("<") && !trimmed.startsWith("<a") && !trimmed.startsWith("<strong") && !trimmed.startsWith("<em") && !trimmed.startsWith("<code")) {
      if (inList) {
        htmlLines.push(listType === "ul" ? "</ul>" : "</ol>");
        inList = false;
      }
      htmlLines.push(line);
      continue;
    }

    // Skip empty lines
    if (trimmed === "") {
      if (inList) {
        htmlLines.push(listType === "ul" ? "</ul>" : "</ol>");
        inList = false;
      }
      continue;
    }

    // Horizontal rule
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
      if (inList) {
        htmlLines.push(listType === "ul" ? "</ul>" : "</ol>");
        inList = false;
      }
      htmlLines.push('<hr class="my-6 border-border" />');
      continue;
    }

    // Headings
    const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      if (inList) {
        htmlLines.push(listType === "ul" ? "</ul>" : "</ol>");
        inList = false;
      }
      const level = headingMatch[1].length;
      const text = inlineFormat(headingMatch[2]);
      const id = headingMatch[2]
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
      const classes = [
        "",
        "text-3xl font-bold tracking-tight mt-10 mb-4 text-foreground",
        "text-2xl font-bold tracking-tight mt-8 mb-3 text-foreground",
        "text-xl font-semibold mt-6 mb-2 text-foreground",
        "text-lg font-semibold mt-4 mb-2 text-foreground",
        "text-base font-semibold mt-4 mb-1 text-foreground",
        "text-sm font-semibold mt-3 mb-1 text-foreground",
      ];
      htmlLines.push(
        `<h${level} id="${id}" class="${classes[level]}">${text}</h${level}>`
      );
      continue;
    }

    // Unordered list
    if (/^[\-\*]\s+/.test(trimmed)) {
      if (!inList || listType !== "ul") {
        if (inList) htmlLines.push(listType === "ul" ? "</ul>" : "</ol>");
        htmlLines.push('<ul class="my-4 ml-6 list-disc space-y-2 text-muted-foreground">');
        inList = true;
        listType = "ul";
      }
      const text = inlineFormat(trimmed.replace(/^[\-\*]\s+/, ""));
      htmlLines.push(`<li>${text}</li>`);
      continue;
    }

    // Ordered list
    if (/^\d+\.\s+/.test(trimmed)) {
      if (!inList || listType !== "ol") {
        if (inList) htmlLines.push(listType === "ul" ? "</ul>" : "</ol>");
        htmlLines.push(
          '<ol class="my-4 ml-6 list-decimal space-y-2 text-muted-foreground">'
        );
        inList = true;
        listType = "ol";
      }
      const text = inlineFormat(trimmed.replace(/^\d+\.\s+/, ""));
      htmlLines.push(`<li>${text}</li>`);
      continue;
    }

    // Regular paragraph
    if (inList) {
      htmlLines.push(listType === "ul" ? "</ul>" : "</ol>");
      inList = false;
    }
    htmlLines.push(
      `<p class="my-4 leading-relaxed text-muted-foreground">${inlineFormat(trimmed)}</p>`
    );
  }

  if (inList) {
    htmlLines.push(listType === "ul" ? "</ul>" : "</ol>");
  }

  return htmlLines.join("\n");
}

function inlineFormat(text: string): string {
  let result = text;

  // Bold
  result = result.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>');

  // Italic
  result = result.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Inline code
  result = result.replace(
    /`([^`]+)`/g,
    '<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">$1</code>'
  );

  // Links
  result = result.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="font-medium text-primary underline underline-offset-4 hover:text-primary/80">$1</a>'
  );

  return result;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const html = markdownToHtml(content);

  return (
    <div
      className="prose-custom max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
