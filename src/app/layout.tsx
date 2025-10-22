import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/utilities.css";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { TransitionProvider } from "@/components/providers/transition-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "SoundScouting",
    template: "%s | SoundScouting"
  },
  description: "Panel de scouting de sonido directo"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body
        className={cn(
          inter.variable,
          "relative min-h-screen bg-background text-foreground antialiased"
        )}
      >
        <div className="flex min-h-screen w-full bg-[radial-gradient(circle_at_top,_rgba(32,66,86,0.45),_transparent_65%)]">
          <Sidebar />
          <div className="flex flex-1 flex-col">
            <Header />
            <main className="flex flex-1 flex-col overflow-hidden px-4 pb-6 pt-4 md:px-10 md:pt-6">
              <TransitionProvider>
                <div className="flex h-full flex-col gap-6">{children}</div>
              </TransitionProvider>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
