import { AppHeader } from '@/components/layout/AppHeader';
import { ReactNode } from 'react';

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};
