'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';
import { HTMLAttributes } from 'react';

interface MDXContentProps extends HTMLAttributes<HTMLDivElement> {
  code: string;
}

export const MDXContent = ({ code, ...props }: MDXContentProps) => {
  const Mdx = useMDXComponent(code);

  return <Mdx {...props} />;
};
