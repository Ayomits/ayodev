import { AppLogo } from '@/components/layout/AppLogo';
import { GithubRoute } from '@/const/routes';
import { cn } from '@/lib/utils';
import { useNavigation } from '@/shared/hooks/useNavigation';
import { Button } from '@/shared/ui/Button';
import { SidebarTrigger } from '@/shared/ui/Sidebar';
import { GithubIcon, SearchIcon } from 'lucide-react';
import Link from 'next/link';
import { CSSProperties, forwardRef, HTMLAttributes } from 'react';

interface AppHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const HEADER_HEIGHT = 70;

export const AppHeader = forwardRef<HTMLDivElement, AppHeaderProps>(
  ({ className, ...props }, ref) => {
    const items = useNavigation();

    return (
      <header
        ref={ref}
        style={{ '--height': `${HEADER_HEIGHT}px` } as CSSProperties}
        className={cn(
          'flex fixed px-3 md:px-10 z-50 w-full h-[var(--height)] bg-background border-b border-sidebar-border justify-between items-center',
          className
        )}
        {...props}
      >
        <SidebarTrigger className='md:hidden' />
        <div className='hidden md:block'>
          <AppLogo />
        </div>
        <div className='hidden md:flex gap-5'>
          {items.common.map((item, idx) => (
            <Link
              key={idx}
              className='flex gap-1 text-secondary hover:text-foreground transition-all duration-300'
              href={item.href}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
        <AppLogo className='md:hidden' />
        <div className='flex gap-1'>
          <Link target='_blank' href={GithubRoute}>
            <Button className='w-4 cursor-pointer' variant='ghost'>
              <GithubIcon />
            </Button>
          </Link>
          <Button className='w-4 cursor-pointer' variant='ghost'>
            <SearchIcon />
          </Button>
        </div>
      </header>
    );
  }
);

AppHeader.displayName = 'AppHeader';
