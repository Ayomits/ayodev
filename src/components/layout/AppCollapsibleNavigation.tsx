import { DocumentationRoute } from '@/const/routes';
import { BaseNavigationItem } from '@/shared/hooks/useNavigation';
import { usePackageName } from '@/shared/hooks/usePackageName';
import { SidebarMenuItem } from '@/shared/ui/Sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/shared/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { HTMLAttributes } from 'react';

interface AppCollapsibleNavigationProps extends HTMLAttributes<HTMLDivElement> {
  link: BaseNavigationItem;
}

export const AppCollapsibleNavigation = ({
  link,
}: AppCollapsibleNavigationProps) => {
  const packageName = usePackageName();
  if (link.href === DocumentationRoute(packageName.packageText)) return null;
  if (link.children?.length) {
    return (
      <Collapsible className='cursor-pointer'>
        <SidebarMenuItem className='px-2 w-full'>
          <CollapsibleTrigger className='w-full hover:bg-sidebar-accent rounded-xl cursor-pointer flex justify-between items-center p-1.5 text-lg font-bold'>
            <div className='flex items-center gap-2'>
              {link.icon}
              {link.name}
            </div>
            <ChevronDown className='w-4 h-4 transition-transform duration-200' />
          </CollapsibleTrigger>
        </SidebarMenuItem>
        <CollapsibleContent className='ml-4'>
          {link.children.map(item => (
            <AppCollapsibleNavigation key={item.href} link={item} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <SidebarMenuItem>
      <Link
        href={link.href}
        className='flex items-center gap-2 px-4 py-2 text-base rounded-md hover:bg-sidebar-accent transition'
      >
        {link.icon}
        {link.name}
      </Link>
    </SidebarMenuItem>
  );
};
