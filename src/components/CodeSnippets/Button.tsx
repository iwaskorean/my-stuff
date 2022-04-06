import { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick(): void;
  isCopied: boolean;
}

export default function CopyButton({
  isCopied,
  handleClick,
  ...props
}: CopyButtonProps) {
  console.log(isCopied);

  return (
    <StyledButton
      isCopied={isCopied}
      onClick={handleClick}
      disabled={isCopied}
      {...props}
    >
      {isCopied ? 'copied' : 'copy'}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ isCopied: boolean }>`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.primary};
  ${({ theme }) => theme.font.size14pt}
  // border: 0.1rem solid ${({ theme }) => theme.color.primary};
  width: 4rem;
  height: 2rem;
  outline: 0;
  cursor: pointer;
  border-radius: 0.25rem;
  letter-spacing: 0.03rem;
  color: ${({ theme }) => theme.color.white};
  border: none;

  &:hover {
    &::before {
      ${({ isCopied }) =>
        isCopied ? `content: 'Copied!';` : `content: 'Copy to clipboard';`};
      width: 8rem;
      padding: 0.5rem 0.2rem;
      position: absolute;
      bottom: 2.1rem;
      right: 0;
      background: red;
      font-size: ${({ theme }) => theme.fontSize.size12}px;
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      line-height: 1rem;
      background-color: ${({ theme }) => theme.color.gray700};
      transform: translate3d(2rem, 0, 0);
      border-radius: 0.25rem;
      letter-spacing: 0;
    }
  }
`;
