import { allDocs } from '.contentlayer/generated';
import { navigation } from '@/const/nav-routes';
import { DocumentationRoute } from '@/const/routes';
import { MdxDocument } from '@/types/mdx';
import { ReactNode } from 'react';

export interface BaseNavigationItem {
  name: string;
  href: string;
  icon?: ReactNode;
  children?: BaseNavigationItem[];
}

export interface ExtendedNavigationItem extends BaseNavigationItem {
  code: string;
  children?: ExtendedNavigationItem[];
}

const cleanSegment = (segment: string) => {
  return segment
    .replace(/^\d+\.\s*/, '')
    .trim()
    .toLowerCase();
};

const insertIntoTree = (
  tree: ExtendedNavigationItem[],
  paths: string[],
  doc: MdxDocument
) => {
  const title = doc.title;
  let fullPath = doc._raw.flattenedPath.split('/').map(cleanSegment).join('/');

  const isIndexFile = paths[paths.length - 1] === 'index';
  if (isIndexFile) {
    fullPath = fullPath.replace(/\/index$/, '');
    paths = paths.slice(0, -1);
  }

  if (paths.length === 0) {
    tree.push({
      name: title,
      href: DocumentationRoute(fullPath),
      code: doc.body.code,
      children: [],
    });
    return;
  }

  const currentSegment = cleanSegment(paths[0]);
  let existingNode = tree.find(
    node => cleanSegment(node.name) === currentSegment
  );

  if (!existingNode) {
    existingNode = {
      name: currentSegment,
      href: '',
      children: [],
      code: '',
    };
    tree.push(existingNode);
  }

  if (paths.length === 1) {
    existingNode.name = title;
    existingNode.href = DocumentationRoute(fullPath);
    existingNode.code = doc.body.code;
  } else {
    if (!existingNode.children) {
      existingNode.children = [];
    }
    insertIntoTree(existingNode.children, paths.slice(1), doc);
  }
};

export const useNavigation = (): {
  common: BaseNavigationItem[];
  packages: Record<string, ExtendedNavigationItem[]>;
} => {
  const navItems: Record<string, ExtendedNavigationItem[]> = {};

  allDocs.forEach((doc: MdxDocument) => {
    const paths = doc._raw.flattenedPath.split('/').map(cleanSegment);
    const categoryKey = paths[0];

    if (!navItems[categoryKey]) {
      navItems[categoryKey] = [];
    }

    insertIntoTree(navItems[categoryKey], paths.slice(1), doc);
  });

  return {
    common: navigation,
    packages: navItems,
  };
};
