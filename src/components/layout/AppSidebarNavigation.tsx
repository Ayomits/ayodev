'use client';

import { AppCollapsibleNavigation } from '@/components/layout/AppCollapsibleNavigation';
import { AppLogo } from '@/components/layout/AppLogo';
import { useNavigation } from '@/shared/hooks/useNavigation';
import { usePackageName } from '@/shared/hooks/usePackageName';
import { usePackageNavigation } from '@/shared/hooks/usePackageNavigation';
import { Separator } from '@/shared/ui/Separator';
import {
  SidebarContent,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/shared/ui/Sidebar';
import Link from 'next/link';

export const AppSidebarNavigation = () => {
  const navigation = useNavigation();
  const _package = usePackageName();
  const packages = usePackageNavigation(_package, navigation.packages);

  return (
    <>
      <SidebarHeader className='md:hidden mx-auto'>
        <AppLogo />
      </SidebarHeader>
      <Separator className='bg-sidebar-border md:hidden' />

      <SidebarGroupContent className='text-foreground'>
        <SidebarContent>
          <SidebarMenu>
            {navigation.common.map((item, idx) => (
              <SidebarMenuItem key={idx}>
                <Link
                  href={item.href}
                  className='flex items-center gap-2 px-4 py-2 text-lg font-semibold  rounded-md'
                >
                  <SidebarMenuButton className='text-lg font-bold'>
                    {item.icon}
                    {item.name}
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>

          <Separator className='bg-sidebar-border' />

          {_package.isPackage && (
            <SidebarMenu>
              <p className='px-4 text-sm font-semibold text-muted-foreground'>
                Documentation
              </p>
              {Object.entries(packages).map(([, links]) =>
                links.map((link, idx) => (
                  <AppCollapsibleNavigation link={link} key={idx} />
                ))
              )}
            </SidebarMenu>
          )}
        </SidebarContent>
      </SidebarGroupContent>
    </>
  );
};
