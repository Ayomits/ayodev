import { MDXContent } from '@/components/mdx/MdxContent';
import { usePackageContent } from '@/shared/hooks/usePackageContent';
import { notFound } from 'next/navigation';
import { HTMLAttributes } from 'react';

interface MDXViewProps extends HTMLAttributes<HTMLDivElement> {
  slug: string[];
}

export const MDXView = ({ slug }: MDXViewProps) => {
  const doc = usePackageContent(slug);
  if (!doc) return notFound();
  return (
    <div>
      <MDXContent code={doc.code} />
    </div>
  );
};
