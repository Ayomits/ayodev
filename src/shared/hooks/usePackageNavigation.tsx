import { BaseNavigationItem } from '@/shared/hooks/useNavigation';
import { PackageName } from '@/shared/hooks/usePackageName';

export const usePackageNavigation = (
  pkg: PackageName,
  packages: Record<string, BaseNavigationItem[]>
) => {
  return pkg.isPackage
    ? Object.keys(packages)
        .filter(key => key === pkg.packageText)
        .map(key => packages[key])
    : [];
};
