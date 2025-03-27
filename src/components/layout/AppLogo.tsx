'use client';

import { HomeRoute } from '@/const/routes';
import { cn } from '@/lib/utils';
import { usePackageName } from '@/shared/hooks/usePackageName';
import Link from 'next/link';
import { forwardRef, HTMLAttributes } from 'react';

interface AppLogoProps
  extends HTMLAttributes<Omit<HTMLAnchorElement, 'href'>> {}

export const AppLogo = forwardRef<HTMLAnchorElement, AppLogoProps>(
  ({ className, ...props }, ref) => {
    const { packageText } = usePackageName();

    return (
      <Link
        ref={ref}
        href={HomeRoute}
        className={cn(
          'text-lg sm:text-xl md:text-2xl text-foreground font-extrabold',
          className
        )}
        {...props}
      >
        <p className='overflow-hidden max-w-[200px] sm:max-w-[250px] md:max-w-full text-ellipsis whitespace-nowrap'>
          {packageText}
        </p>
      </Link>
    );
  }
);

AppLogo.displayName = 'AppLogo';
