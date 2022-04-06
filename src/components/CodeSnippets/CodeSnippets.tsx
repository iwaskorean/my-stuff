import { HTMLAttributes, useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CopyButton from './Button';
import styled from '@emotion/styled';

type LanguageType = 'javascript' | 'jsx' | 'tsx' | 'html' | 'css' | 'bash';

export interface CodeSnippetsProps extends HTMLAttributes<HTMLDivElement> {
  code: string;
  language: LanguageType;
}

export default function CodeSnippets({
  code,
  language,
  ...props
}: CodeSnippetsProps) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [isCopied]);

  const handleCopyClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
    } catch (error) {
      console.log(error);
      setIsCopied(false);
    }
  };

  return (
    <Wrapper {...props}>
      <SyntaxHighlighter
        language={language}
        style={base16AteliersulphurpoolLight}
        lineProps={{
          style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' },
        }}
        wrapLines={true}
      >
        {code.trim()}
      </SyntaxHighlighter>
      <CopyButton isCopied={isCopied} handleClick={handleCopyClipboard} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: 0.3rem;

  pre {
    border-radius: inherit;
    padding: 1.5rem 1rem !important;
  }
`;
