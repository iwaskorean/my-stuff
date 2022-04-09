import { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface SlideButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  prev?: boolean;
  next?: boolean;
  handleSlide(): void;
}

export default function SlideButton({
  prev = false,
  next = false,
  handleSlide,
  ...props
}: SlideButtonProps) {
  return <Button prev={prev} next={next} onClick={handleSlide} {...props} />;
}

const Button = styled.button<{
  prev: boolean;
  next: boolean;
}>`
  position: absolute;
  top: 50%;
  width: 35px;
  height: 35px;
  transform: translateY(-50%);
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 50%;
    transform: translate3d(-50%, -50%, 0) rotate(135deg);

    ${({ theme }) =>
      `
        border-right: 3px solid ${theme.color.primary};
        border-bottom: 3px solid ${theme.color.primary};
    `}
  }

  ${({ prev }) =>
    prev &&
    `
    left:10px;
    &:after {
      left: calc(50% + 2.5px);
    }
  `}

  ${({ next }) =>
    next &&
    `
    right:10px;

    &:after {
      left: calc(50% - 2.5px);
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  `}
`;
