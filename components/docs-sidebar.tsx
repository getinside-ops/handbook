"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export interface SidebarNavItem {
  title: string;
  slug: string[];
  children?: SidebarNavItem[];
}

interface DocsSidebarProps {
  sectionTitle: string;
  sectionSlug: string;
  items: SidebarNavItem[];
}

export function DocsSidebar({ sectionTitle, sectionSlug, items }: DocsSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0" aria-label="Navigation de la section">
      <nav className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pb-10">
        <div className="mb-4">
          <Link
            href={`/docs/${sectionSlug}`}
            className={cn(
              "text-sm font-bold transition-colors",
              pathname === `/docs/${sectionSlug}`
                ? "text-primary"
                : "text-foreground hover:text-primary"
            )}
          >
            {sectionTitle}
          </Link>
        </div>
        <ul className="flex flex-col gap-0.5">
          {items.map((item) => (
            <SidebarItem key={item.slug.join("/")} item={item} pathname={pathname} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

function SidebarItem({
  item,
  pathname,
}: {
  item: SidebarNavItem;
  pathname: string;
}) {
  const href = `/docs/${item.slug.join("/")}`;
  const isActive = pathname === href;
  const hasChildren = item.children && item.children.length > 0;
  const isChildActive = hasChildren && item.children!.some(
    (child) => pathname === `/docs/${child.slug.join("/")}`
  );
  const [expanded, setExpanded] = useState(isActive || isChildActive);

  return (
    <li>
      <div className="flex items-center">
        {hasChildren && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="mr-1 flex h-5 w-5 shrink-0 items-center justify-center rounded text-muted-foreground hover:text-foreground"
            aria-label={expanded ? "Replier" : "Deplier"}
          >
            <ChevronRight
              className={cn(
                "h-3.5 w-3.5 transition-transform",
                expanded && "rotate-90"
              )}
            />
          </button>
        )}
        <Link
          href={href}
          className={cn(
            "flex-1 rounded-md px-2 py-1.5 text-sm transition-colors",
            isActive
              ? "bg-primary/10 font-medium text-primary"
              : "text-muted-foreground hover:bg-accent hover:text-foreground",
            !hasChildren && "ml-6"
          )}
        >
          {item.title}
        </Link>
      </div>
      {hasChildren && expanded && (
        <ul className="ml-4 mt-0.5 flex flex-col gap-0.5 border-l border-border pl-2">
          {item.children!.map((child) => (
            <SidebarItem
              key={child.slug.join("/")}
              item={child}
              pathname={pathname}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
