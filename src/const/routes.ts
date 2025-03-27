export const HomeRoute = '/';
export const PackagesRoute = '/packages';
export const DocumentationRoute = (pkg: string, docTitle?: string) =>
  `/docs/${pkg}${docTitle?.length ? `/${docTitle}` : ''}`;
export const GithubRoute = 'https://github.com/ayocord-js';
