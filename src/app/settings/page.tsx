import { AnimatedSection } from "@/components/common/animated-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import type { LucideIcon } from "lucide-react";
import { Bell, Globe2, ShieldCheck } from "lucide-react";

const preferences: Array<{
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    id: "notifications",
    title: "Alertas de rodaje",
    description: "Recibe avisos inmediatos cuando se programe una nueva sesión de scouting.",
    icon: Bell
  },
  {
    id: "privacy",
    title: "Sincronizar notas seguras",
    description: "Habilita cifrado de extremo a extremo para comentarios y adjuntos.",
    icon: ShieldCheck
  },
  {
    id: "language",
    title: "Idioma",
    description: "Selecciona el idioma preferido para informes y reportes.",
    icon: Globe2
  }
];

export default function SettingsPage() {
  return (
    <div className="flex h-full flex-col gap-6">
      <AnimatedSection className="space-y-2">
        <h2 className="text-2xl font-semibold">Configuración</h2>
        <p className="text-sm text-muted-foreground">
          Ajusta preferencias personales y del equipo para optimizar la planificación.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.1} className="grid flex-1 gap-6 xl:grid-cols-2">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Preferencias generales</CardTitle>
            <CardDescription>Administra notificaciones y opciones de privacidad.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col gap-5">
            {preferences.map(pref => (
              <div key={pref.id} className="rounded-xl border border-border/60 bg-secondary/10 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-1 items-start gap-3">
                    <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <pref.icon className="h-5 w-5" />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-foreground">{pref.title}</h3>
                      <p className="text-sm text-muted-foreground">{pref.description}</p>
                    </div>
                  </div>
                  <Switch defaultChecked={pref.id === "notifications"} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Integraciones</CardTitle>
            <CardDescription>
              Conecta SoundScouting con tus herramientas de agenda y comunicación.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col gap-6">
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                Próximamente podrás vincular cuentas de calendario, almacenamiento en la nube y
                mensajería para sincronizar automáticamente tus hallazgos.
              </p>
              <Separator className="opacity-20" />
              <p>
                Mientras tanto, exporta informes y compártelos con tu equipo para mantenerlos
                alineados con cada visita a locación.
              </p>
            </div>
            <Button variant="secondary" className="mt-auto self-start">Explorar integraciones</Button>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}
