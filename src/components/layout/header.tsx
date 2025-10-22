"use client";

import { useMemo } from "react";
import { BellRing, CircleUserRound } from "lucide-react";
import { usePathname } from "next/navigation";
import { resolveRoute } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();
  const route = useMemo(() => resolveRoute(pathname), [pathname]);

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-border/80 bg-background/80 px-6 backdrop-blur-2xl">
      <div className="flex flex-col">
        <p className="text-xs uppercase tracking-[0.2em] text-primary/80">SoundScouting</p>
        <h1 className={cn("text-2xl font-semibold leading-tight text-foreground", "md:text-3xl")}>{route.title}</h1>
        {route.description ? (
          <p className="text-sm text-muted-foreground">{route.description}</p>
        ) : null}
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative">
          <BellRing className="h-5 w-5" />
          <span className="absolute right-2 top-1 inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-destructive" />
        </Button>
        <Button variant="secondary" className="flex items-center gap-2">
          <CircleUserRound className="h-5 w-5" />
          <span className="hidden text-sm font-medium sm:inline">Invitado</span>
        </Button>
      </div>
    </header>
  );
}
