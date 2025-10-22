import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface QuickStatProps {
  label: string;
  value: string;
  icon: ReactNode;
  trend?: string;
}

export function QuickStat({ label, value, icon, trend }: QuickStatProps) {
  return (
    <div className="card group flex flex-col gap-4 p-5 transition hover:border-primary/60 hover:shadow-xl">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{label}</span>
        <span className="text-primary">{icon}</span>
      </div>
      <div className="flex items-end justify-between">
        <span className={cn("text-2xl font-semibold tracking-tight text-foreground")}>{value}</span>
        {trend ? <span className="text-xs font-medium text-primary/80">{trend}</span> : null}
      </div>
    </div>
  );
}
