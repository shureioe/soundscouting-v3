import { CalendarDays, MapPinned, Radio, Waves } from "lucide-react";
import { AnimatedSection } from "@/components/common/animated-section";
import { QuickStat } from "@/components/common/quick-stats";
import { EmptyState } from "@/components/common/empty-state";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stats = [
  {
    label: "Proyectos activos",
    value: "08",
    icon: <Waves className="h-5 w-5" />,
    trend: "+2 esta semana"
  },
  {
    label: "Locaciones scout",
    value: "21",
    icon: <MapPinned className="h-5 w-5" />,
    trend: "5 por visitar"
  },
  {
    label: "Pruebas de audio",
    value: "14",
    icon: <Radio className="h-5 w-5" />,
    trend: "3 pendientes"
  },
  {
    label: "Sesiones agendadas",
    value: "05",
    icon: <CalendarDays className="h-5 w-5" />,
    trend: "Próxima en 2 días"
  }
];

export default function DashboardPage() {
  return (
    <div className="flex h-full flex-col gap-6">
      <AnimatedSection className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map(stat => (
          <QuickStat
            key={stat.label}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
            trend={stat.trend}
          />
        ))}
      </AnimatedSection>
      <AnimatedSection delay={0.1} className="grid h-full gap-6 xl:grid-cols-[2fr_1fr]">
        <Card className="flex h-full flex-col">
          <CardHeader>
            <CardTitle>Próximos hitos</CardTitle>
            <CardDescription>
              Sincroniza los equipos y verifica disponibilidades antes de salir a rodaje.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col justify-center">
            <EmptyState
              title="No hay hitos programados"
              description="Coordina las siguientes visitas de scouting para mantener actualizado al equipo de sonido."
              actionLabel="Crear hito"
              secondaryAction={<Button variant="ghost">Importar agenda</Button>}
            />
          </CardContent>
        </Card>
        <Card className="flex h-full flex-col">
          <CardHeader>
            <CardTitle>Actividad reciente</CardTitle>
            <CardDescription>
              Revisa los cambios de último momento sobre equipos y ubicaciones.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col justify-center gap-4">
            <EmptyState
              title="Sin registros recientes"
              description="Cuando el equipo actualice notas de campo las verás reflejadas aquí."
              actionLabel="Compartir tablero"
              secondaryAction={<Button variant="link">Ver historial</Button>}
            />
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}
