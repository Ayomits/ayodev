import { DocumentationRoute } from '@/const/routes';
import {
  ExtendedNavigationItem,
  useNavigation,
} from '@/shared/hooks/useNavigation';

const searchInNavigation = (
  slug: string[],
  nav: ExtendedNavigationItem
): ExtendedNavigationItem | null => {
  if (
    nav.href ===
    DocumentationRoute(
      slug[0].toLowerCase(),
      slug.slice(1).join('/').replace('index', '').toLowerCase()
    )
  ) {
    return nav;
  }

  if (nav.children?.length) {
    return searchInPackage(slug, nav.children);
  }

  return null;
};

const searchInPackage = (
  slug: string[],
  packages: ExtendedNavigationItem[]
): ExtendedNavigationItem | null => {
  for (const nav of packages) {
    const result = searchInNavigation(slug, nav);
    if (result) return result;
  }
  return null;
};

export const usePackageContent = (
  slug: string[]
): ExtendedNavigationItem | null => {
  const navigation = useNavigation();
  const packages = navigation.packages[slug[0].toLowerCase()];
  if (!packages) return null;

  return searchInPackage(slug, packages);
};
