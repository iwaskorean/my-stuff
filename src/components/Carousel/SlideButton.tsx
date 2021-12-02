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

const Button = styled.button<{ prev: boolean; next: boolean }>`
  position: absolute;
  top: 50%;
  width: 40px;
  height: 40px;
  background-color: ivory;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 3;
  border: none;

  &:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 50%;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    transform: translate(-50%, -50%) rotate(135deg);
  }

  ${({ prev }) =>
    prev &&
    `
    left:0;
  `}

  ${({ next }) =>
    next &&
    `
    right:0;

    &:after {
      left: 47%;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  `}
`;
