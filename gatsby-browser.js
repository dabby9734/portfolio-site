import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import CodeBlock from './src/components/Codeblock/Codeblock';

const component = {
  pre: CodeBlock,
};

const wrapRootElement = ({ element }) => {
  return <MDXProvider components={component}>{element}</MDXProvider>;
};

export default wrapRootElement;
