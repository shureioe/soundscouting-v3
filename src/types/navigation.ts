import type { LucideIcon } from "lucide-react";

export type RouteMatcher = {
  title: string;
  description?: string;
  href?: string;
  pattern?: RegExp;
};

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type NavSection = {
  title: string;
  items: NavItem[];
};
