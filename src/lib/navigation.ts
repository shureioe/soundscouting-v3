import {
  LayoutDashboard,
  MapPin,
  Settings,
  BriefcaseBusiness
} from "lucide-react";
import type { NavItem, NavSection, RouteMatcher } from "@/types/navigation";

export const navigation: NavSection[] = [
  {
    title: "General",
    items: [
      {
        label: "Dashboard",
        href: "/",
        icon: LayoutDashboard
      },
      {
        label: "Proyectos",
        href: "/project",
        icon: BriefcaseBusiness
      },
      {
        label: "Ubicaciones",
        href: "/location",
        icon: MapPin
      }
    ]
  },
  {
    title: "Sistema",
    items: [
      {
        label: "Ajustes",
        href: "/settings",
        icon: Settings
      }
    ]
  }
];

export const dynamicRoutes: RouteMatcher[] = [
  {
    title: "Detalle de proyecto",
    description: "Gestiona estados, escenas y responsables del proyecto.",
    pattern: /^\/project\/[\w-]+$/
  },
  {
    title: "Detalle de ubicación",
    description: "Revisa información acústica y notas del lugar.",
    pattern: /^\/location\/[\w-]+$/
  }
];

export function flatNavigation(): NavItem[] {
  return navigation.flatMap(section => section.items);
}

export function resolveRoute(pathname: string): RouteMatcher {
  const exact = flatNavigation().find(link => link.href === pathname);
  if (exact) {
    return {
      title: exact.label,
      href: exact.href,
      description: getRouteDescription(exact.href)
    };
  }

  const match = dynamicRoutes.find(route => route.pattern?.test(pathname));
  if (match) {
    return match;
  }

  return {
    title: "SoundScouting",
    description: "Explora y coordina recursos de sonido en campo."
  };
}

function getRouteDescription(href: string | undefined): string | undefined {
  switch (href) {
    case "/":
      return "Resumen general de proyectos y sesiones de grabación.";
    case "/project":
      return "Administra proyectos, equipos y necesidades de rodaje.";
    case "/location":
      return "Consulta ubicaciones y condiciones de audio.";
    case "/settings":
      return "Configura preferencias del sistema y notificaciones.";
    default:
      return undefined;
  }
}

export function getSectionForPath(pathname: string): NavSection | undefined {
  return navigation.find(section => section.items.some(item => item.href === pathname));
}
