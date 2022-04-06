import styled from '@emotion/styled';
import { Story } from '@storybook/react';
import CodeSnippets, { CodeSnippetsProps } from './CodeSnippets';

export default {
  title: 'Components/CodeSnippets',
  component: CodeSnippets,
};

const Template: Story<CodeSnippetsProps> = (args) => {
  return (
    <Container>
      <CodeSnippets {...args} />
    </Container>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  code: `
import React from 'react';

function MyCode() {
  return (
    <Component>
      <Nested>
        <h2>Hi, I am JSX.</h2>
      </Nested>
    </Component>
  );
}
`,
  language: 'jsx',
};

const Container = styled.div`
  width: 500px;
`;
