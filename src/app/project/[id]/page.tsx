import { notFound } from "next/navigation";
import { ArrowLeft, CalendarCheck2, MapPinned, Mic2 } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/common/animated-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const mockProjects = new Map([
  [
    "temporada-documental",
    {
      title: "Temporada documental",
      summary: "Explora ambientes sonoros naturales y urbanos en 6 episodios.",
      milestones: [
        "Bloquear agenda con fotógrafos para la semana 4",
        "Confirmar transporte para equipos de boom en locaciones costeras",
        "Solicitar permisos de grabación nocturna"
      ]
    }
  ]
]);

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = mockProjects.get(params.id);

  if (!project) {
    notFound();
  }

  const currentProject = project;

  return (
    <div className="flex h-full flex-col gap-6">
      <AnimatedSection className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <Link href="/project" className="text-sm text-primary hover:underline">
            ← Volver a proyectos
          </Link>
          <h2 className="text-3xl font-semibold">{currentProject.title}</h2>
          <p className="text-sm text-muted-foreground">{currentProject.summary}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="gap-2">
            <CalendarCheck2 className="h-4 w-4" /> Programar visita
          </Button>
          <Button className="gap-2">
            <Mic2 className="h-4 w-4" /> Registrar hallazgos
          </Button>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.1} className="grid flex-1 gap-6 md:grid-cols-[2fr_1fr]">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Checklist de preparación</CardTitle>
            <CardDescription>
              Asegúrate de cubrir logística, permisos y equipos antes de salir a terreno.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col gap-3 text-sm text-muted-foreground">
            {currentProject.milestones.map(item => (
              <div key={item} className="flex items-start gap-3 rounded-lg bg-secondary/10 p-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                <span>{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Próxima locación</CardTitle>
            <CardDescription>
              Agenda la visita y comparte notas con el resto del equipo.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col justify-between gap-6">
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2 text-foreground">
                <MapPinned className="h-4 w-4 text-primary" /> Puerto de San Marcos
              </p>
              <p>Ruido de olas intenso por la noche. Requiere protección extra para micrófonos.</p>
              <p>Notas del director: capturar ambiente en amanecer y voces locales.</p>
            </div>
            <Button asChild variant="outline" className="gap-2">
              <Link href="/location/puerto-san-marcos">
                Ver ubicación <ArrowLeft className="h-4 w-4 rotate-180" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}
