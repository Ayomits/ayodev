'use client';

import { SidebarProvider } from '@/shared/ui/Sidebar';
import { MDXProvider } from '@mdx-js/react';
import { ReactNode, StrictMode } from 'react';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <StrictMode>
      <MDXProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </MDXProvider>
    </StrictMode>
  );
};
