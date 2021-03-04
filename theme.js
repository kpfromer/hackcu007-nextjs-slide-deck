import SyntaxHighlighter from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from 'react';
import { ThemeProvider } from 'theme-ui';
import styled from 'styled-components';
import { github as codeSurferTheme } from '@code-surfer/themes';

function getLanguage(string) {
  return string
    .split(' ')
    .filter((string) => /language-[a-zA-Z]*/.test(string))
    .map((s) => s.replace('language-', ''))
    .pop();
}

// src = https://... or /images/...
function Image({ src, ...props }) {
  if (src.startsWith('/')) {
    return <img {...props} src={require(`./images${src}`)} />;
  }
  return <img src={src} {...props} />;
}

const customTheme = {
  //   // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md

  fonts: {
    body: 'Inter, sans-serif',
    monospace: 'Inter, monospace',
  },
  colors: {
    text: 'black',
    background: 'white',
    primary: '#3B82F6',
    secondary: '#F472B6',
  },
  styles: {
    ...['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'].reduce(
      (prev, selector) => ({
        ...prev,
        [selector]: {
          textAlign: 'center',
        },
      }),
      {},
    ),
    a: {
      color: 'primary',
      '&:visited': {
        color: 'primary',
      },
    },
    CodeSurfer: codeSurferTheme.styles.CodeSurfer,
    //   CodeSurfer: {
    //     pre: {
    //       color: 'text',
    //       backgroundColor: 'background',
    //     },
    //     code: {
    //       color: 'text',
    //       backgroundColor: 'background',
    //     },
    //     // inlineCode: {
    //     //   color: 'red',
    //     // },
    //     tokens: {
    //       'comment cdata doctype': {
    //         fontStyle: 'italic',
    //       },
    //       'builtin changed keyword punctuation operator tag deleted string attr-value char number inserted': {
    //         color: 'primary',
    //       },
    //       'line-number': {
    //         opacity: 0.8,
    //       },
    //     },
    //     title: {
    //       backgroundColor: 'background',
    //       color: 'text',
    //     },
    //     subtitle: {
    //       color: '#d6deeb',
    //       backgroundColor: 'rgba(10,10,10,0.9)',
    //     },
    //     unfocused: {
    //       // only the opacity of unfocused code can be changed
    //       opacity: 0.3,
    //     },
    //   },
  },
};

const InlineCode = styled.span`
  color: ${customTheme.colors.secondary};
  :before {
    content: '\`';
  }
  :after {
    content: '\`';
  }
`;

const Blockquote = styled.blockquote`
  border-left-width: 0.25rem;
  border-left-style: solid;
  border-left-color: ${customTheme.colors.primary};
  padding-left: 2.25rem;

  & p:first-of-type {
    margin-top: 0;
  }

  & p:first-of-type::before {
    content: '"';
  }

  & p:last-of-type {
    margin-bottom: 0;
  }

  & p:last-of-type::after {
    content: '"';
  }
`;

const mdxComponents = {
  img: Image,
  code: ({ className, children, ...rest }) => {
    const language = className ? getLanguage(className) : 'plaintext';
    return (
      <SyntaxHighlighter language={language} style={okaidia}>
        {children}
      </SyntaxHighlighter>
    );
  },
  inlineCode: InlineCode,
  blockquote: Blockquote,
};

export const theme = {
  // Provider,
  ...customTheme,
  components: mdxComponents,
};
