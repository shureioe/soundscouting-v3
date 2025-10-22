import Link from "next/link";
import { ArrowRight, FolderKanban, Plus } from "lucide-react";
import { AnimatedSection } from "@/components/common/animated-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/common/empty-state";

export default function ProjectsPage() {
  return (
    <div className="flex h-full flex-col gap-6">
      <AnimatedSection className="flex items-center justify-between gap-3">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">Proyectos</h2>
          <p className="text-sm text-muted-foreground">
            Organiza rodajes, sesiones y necesidades de sonido para cada producción.
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" /> Nuevo proyecto
        </Button>
      </AnimatedSection>
      <AnimatedSection delay={0.1} className="grid flex-1 gap-6 md:grid-cols-2">
        <Card className="flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Temporada documental</CardTitle>
              <CardDescription>Coordinación con locaciones urbanas y marinas.</CardDescription>
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FolderKanban className="h-5 w-5" />
            </span>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col justify-between gap-6">
            <div className="rounded-lg border border-dashed border-border/80 p-4 text-sm text-muted-foreground">
              • Verificar permisos de sonido en centro histórico.
              <br />• Agendar pruebas con micrófonos binaurales.
            </div>
            <Button asChild variant="outline" className="w-full justify-between">
              <Link href="/project/temporada-documental">
                Abrir tablero <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Proyectos en preparación</CardTitle>
            <CardDescription>
              Aún no has sumado más producciones. Crea un nuevo proyecto para empezar.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col justify-center">
            <EmptyState
              title="Sin proyectos adicionales"
              description="Agrega proyectos para coordinar el scouting de cada escena de manera independiente."
              actionLabel="Registrar proyecto"
              secondaryAction={<Button variant="ghost">Importar desde CSV</Button>}
            />
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}
