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
import { Compass, MapPinned, Plus } from "lucide-react";

const featuredLocations = [
  {
    id: "puerto-san-marcos",
    name: "Puerto de San Marcos",
    context: "Ambiente marino con brisa intensa",
    notes: "Revisar niveles de viento y necesidad de cortavientos extra."
  },
  {
    id: "teatro-colonial",
    name: "Teatro Colonial",
    context: "Recintos cerrados con reverberación alta",
    notes: "Usar microfonía direccional y registrar impulsos."
  }
];

export default function LocationsPage() {
  return (
    <div className="flex h-full flex-col gap-6">
      <AnimatedSection className="flex items-center justify-between gap-3">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">Ubicaciones</h2>
          <p className="text-sm text-muted-foreground">
            Gestiona notas de campo, ruido ambiente y logística de cada locación.
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" /> Nueva ubicación
        </Button>
      </AnimatedSection>
      <AnimatedSection delay={0.1} className="grid flex-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredLocations.map(location => (
          <Card key={location.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {location.name}
                <MapPinned className="h-5 w-5 text-primary" />
              </CardTitle>
              <CardDescription>{location.context}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col justify-between gap-4">
              <p className="text-sm text-muted-foreground">{location.notes}</p>
              <Button asChild variant="outline" className="w-full gap-2">
                <Link href={`/location/${location.id}`}>
                  Ver detalles <Compass className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </AnimatedSection>
    </div>
  );
}
