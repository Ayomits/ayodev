import { AppMain } from '@/components/layout/AppMain';
import { AppSidebar } from '@/components/layout/AppSidebar';
import { MDXView } from '@/components/mdx/MDXView';
import { usePackageContent } from '@/shared/hooks/usePackageContent';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface DocsPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({
  params,
}: DocsPageProps): Promise<Metadata> {
  const { slug } = await params;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const content = usePackageContent(slug);
  if (!content) {
    return {
      title: '404 - document not found',
      description:
        "You're walking around the site and found this page. Please come back)",
    };
  }
  return {
    title: content.name,
    description: `The ${content.name} page`,
  };
}

export default async function Page({ params }: DocsPageProps) {
  const { slug } = await params;
  if (slug.length < 1) {
    console.log('slug issue');
    return notFound();
  }

  return (
    <>
      <AppSidebar />
      <AppMain>
        <MDXView slug={slug} />
      </AppMain>
    </>
  );
}
