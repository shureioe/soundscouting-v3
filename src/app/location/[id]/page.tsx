import { notFound } from "next/navigation";
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
import { Droplets, Waves, Wind } from "lucide-react";

const mockLocations = new Map([
  [
    "puerto-san-marcos",
    {
      name: "Puerto de San Marcos",
      context: "Muelle abierto con afluencia de barcos pesqueros.",
      ambience: "Olas intensas, gaviotas y actividad portuaria constante.",
      recommendations: [
        "Utilizar parabrisas grande y suspensiones antiviento",
        "Grabar referencias de ruido ambiente antes del amanecer",
        "Coordinar con capitanes horarios de menor tráfico"
      ]
    }
  ]
]);

export default function LocationDetailPage({ params }: { params: { id: string } }) {
  const location = mockLocations.get(params.id);

  if (!location) {
    notFound();
  }

  const currentLocation = location;

  return (
    <div className="flex h-full flex-col gap-6">
      <AnimatedSection className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <Link href="/location" className="text-sm text-primary hover:underline">
            ← Volver a ubicaciones
          </Link>
          <h2 className="text-3xl font-semibold">{currentLocation.name}</h2>
          <p className="text-sm text-muted-foreground">{currentLocation.context}</p>
        </div>
        <Button className="gap-2">
          <Droplets className="h-4 w-4" /> Registrar condiciones
        </Button>
      </AnimatedSection>
      <AnimatedSection delay={0.1} className="grid flex-1 gap-6 xl:grid-cols-[2fr_1fr]">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Ambiente sonoro</CardTitle>
            <CardDescription>Notas generales de ruido y dinámica del lugar.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            {currentLocation.ambience}
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Recomendaciones rápidas</CardTitle>
            <CardDescription>
              Preparación sugerida para afrontar las condiciones de la locación.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col gap-3 text-sm text-muted-foreground">
            {currentLocation.recommendations.map(item => (
              <div key={item} className="flex items-start gap-3 rounded-lg bg-secondary/10 p-3">
                <Wind className="mt-1 h-4 w-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
            <Button asChild variant="outline" className="mt-auto gap-2">
              <Link href="/project/temporada-documental">
                Ver proyecto asociado <Waves className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}
