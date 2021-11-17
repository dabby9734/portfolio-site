import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import CodeBlock from './src/components/Codeblock/Codeblock';

const component = {
  pre: CodeBlock,
};

/* eslint-disable */
// intended to be exported in this way
export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={component}>{element}</MDXProvider>;
};
