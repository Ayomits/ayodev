import { AppHeader } from '@/components/layout/AppHeader';
import { SidebarInset } from '@/shared/ui/Sidebar';
import { ReactNode } from 'react';

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};
