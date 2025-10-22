import type { Route } from 'next';
import type { LucideIcon } from 'lucide-react';

export type RouteMatcher = {
  title: string;
  description?: string;
  href?: Route;
  pattern?: RegExp;
};

export type NavItem = {
  label: string;
  href: Route;
  icon: LucideIcon;
};

export type NavSection = {
  title: string;
  items: NavItem[];
};
