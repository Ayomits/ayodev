import { cn } from '@/lib/utils';
import { SidebarInset } from '@/shared/ui/Sidebar';
import { forwardRef, HTMLAttributes } from 'react';

interface AppMainProps extends HTMLAttributes<HTMLDivElement> {}

export const AppMain = forwardRef<HTMLDivElement, AppMainProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <SidebarInset className={cn('mt-[70px]', className)} ref={ref} {...props}>
        {children}
      </SidebarInset>
    );
  }
);
