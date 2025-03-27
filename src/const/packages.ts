import { DocumentationRoute } from '@/const/routes';

export interface Package {
  name: string;
  description: string;
  docs: string;
}

export const packages: Package[] = [
  {
    name: 'Embla-carousel autoplay',
    description:
      'Simple plugin that extend original with pause/resume functionality',
    docs: DocumentationRoute('embla-carousel-autoplay'),
  },
  {
    name: 'Ayocord',
    description:
      'The best discord.js framework with decorators and hooks like React',
    docs: DocumentationRoute('ayocord'),
  },
  {
    name: 'Ayologger',
    description: 'Simple console logger where you can change the output color',
    docs: DocumentationRoute('ayologger'),
  },
];
