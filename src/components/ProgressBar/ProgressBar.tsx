import styled from '@emotion/styled';

export interface ProgressBarProps {
  range: number;
  speed: number;
}

export default function ProgressBar({ range, speed }: ProgressBarProps) {
  return (
    <Container>
      <Gauge range={range} speed={speed} />
    </Container>
  );
}

const Container = styled.div`
  height: 30px;
  position: relative;
  background: #d0d0d0;
  border-radius: 8px;
  padding: 5px;
  overflow: hidden;
  margin-bottom: 16px;
`;

const Gauge = styled.span<ProgressBarProps>`
  width: ${({ range }) => `${range}%`};
  display: block;
  height: 100%;
  border-radius: 8px;
  background-color: rgb(71, 170, 213);
  transition: ${({ speed }) => `width ${speed}ms ease-in-out`};

  overflow: hidden;
`;
