import { AppSidebarNavigation } from '@/components/layout/AppSidebarNavigation';
import { Sidebar } from '@/shared/ui/Sidebar';
import { forwardRef, HTMLAttributes } from 'react';

interface AppSidebarProps extends HTMLAttributes<HTMLDivElement> {}

export const AppSidebar = forwardRef<HTMLDivElement, AppSidebarProps>(
  ({ ...props }, ref) => {
    return (
      <Sidebar
        variant='sidebar'
        collapsible='offcanvas'
        side='left'
        className='top-[70px] text-foreground'
        ref={ref}
        {...props}
      >
        <AppSidebarNavigation />
      </Sidebar>
    );
  }
);
