import styled from '@emotion/styled';

interface IndicatorsProps {
  length: number;
  current: number;
  handleCurrent: React.Dispatch<React.SetStateAction<number>>;
}

export default function Indicators({
  length,
  current,
  handleCurrent,
}: IndicatorsProps) {
  return (
    <Container>
      {Array.from({ length: length }).map((_, i) => (
        <Indicator
          key={i}
          active={i === current}
          onClick={() => handleCurrent(i)}
        />
      ))}
    </Container>
  );
}

const Container = styled.ul`
  position: absolute;
  bottom: 10px;
  width: 100%;
  z-index: 2;
  display: flex;
  list-style: none;
  justify-content: center;
`;

const Indicator = styled.li<{ active: boolean }>`
  width: 9%;
  min-width: 18px;
  height: 10px;
  background-color: ${({ theme }) => theme.color.gray400};
  border: 1px solid ${({ theme }) => theme.color.gray600};
  cursor: pointer;
  margin: 0 5px;

  ${({ active }) =>
    active &&
    `
    background-color: var(--color) ;
  `}
`;
