import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 text-lg font-semibold", className)}>
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg">
        SS
      </span>
      <span className="text-base font-bold tracking-wide">SoundScouting</span>
    </div>
  );
}
