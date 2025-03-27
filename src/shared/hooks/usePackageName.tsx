'use client';

import { usePathname } from 'next/navigation';

export interface PackageName {
  packageText: string;
  isPackage: boolean;
}

export const usePackageName = (): PackageName => {
  const pathName = usePathname();
  const defaultName = 'ayodev';
  const packageText = pathName.includes('/docs')
    ? pathName.split('/').filter(value => !!value)[1]
    : defaultName;

  return {
    packageText,
    isPackage: packageText !== defaultName,
  };
};
