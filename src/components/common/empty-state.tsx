import { type ReactNode } from "react";
import { Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  secondaryAction?: ReactNode;
}

export function EmptyState({
  title,
  description,
  actionLabel = "Crear",
  onAction,
  secondaryAction
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border/60 p-12 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <Inbox className="h-7 w-7 text-primary" />
      </span>
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        <p className="max-w-md text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button onClick={onAction}>{actionLabel}</Button>
        {secondaryAction}
      </div>
    </div>
  );
}
