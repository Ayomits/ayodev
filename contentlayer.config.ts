import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
  },
}));

export default makeSource({
  contentDirPath: 'docs',
  documentTypes: [Doc],
});
