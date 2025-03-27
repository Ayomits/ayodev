export interface MdxDocument {
  _id: string;
  title: string;
  type: 'Doc';
  body: {
    // The JavaScript code of this MDX
    code: string;
    raw: string;
  };
  _raw: {
    contentType: string;
    flattenedPath: string;
    sourceFileDir: string;
    sourceFilePath: string;
  };
}
