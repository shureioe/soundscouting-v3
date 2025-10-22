'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navigation } from '@/lib/navigation';
import { Logo } from '@/components/icons/logo';
import { Separator } from '@/components/ui/separator';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className='hidden h-full w-72 shrink-0 border-r border-border/80 bg-background/60 px-6 py-8 shadow-lg backdrop-blur-2xl lg:flex lg:flex-col'>
      <Logo className='px-2' />
      <Separator className='my-6 opacity-60' />
      <nav className='flex flex-1 flex-col gap-6 text-sm'>
        {navigation.map(section => (
          <div key={section.title} className='flex flex-col gap-3'>
            <p className='px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground'>
              {section.title}
            </p>
            <div className='flex flex-col gap-1'>
              {section.items.map(item => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'group flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                      'hover:bg-primary/10 hover:text-primary',
                      isActive
                        ? 'bg-primary/15 text-primary'
                        : 'text-muted-foreground'
                    )}
                  >
                    <item.icon className='h-4 w-4 transition-transform group-hover:scale-105' />
                    <span className='font-medium'>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
      <div className='rounded-lg border border-white/5 bg-white/[0.03] p-4 text-xs text-muted-foreground'>
        <p className='font-semibold text-foreground'>¿Necesitas ayuda?</p>
        <p className='mt-1 leading-relaxed'>
          Accede a la guía de scouting y comparte notas con tu equipo para planificar
          la grabación perfecta.
        </p>
        <Link
          href='/settings'
          className='mt-3 inline-flex w-full items-center justify-center rounded-md bg-secondary/60 px-3 py-2 text-secondary-foreground transition hover:bg-secondary'
        >
          Abrir ajustes
        </Link>
      </div>
    </aside>
  );
}
