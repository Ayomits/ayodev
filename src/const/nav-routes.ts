import { GithubRoute, PackagesRoute } from '@/const/routes';
import { BaseNavigationItem } from '@/shared/hooks/useNavigation';

export const navigation: BaseNavigationItem[] = [
  {
    name: 'Source',
    href: GithubRoute,
  },
];
