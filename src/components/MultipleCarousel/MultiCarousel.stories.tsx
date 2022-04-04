import { Story } from '@storybook/react';
import MultiCarousel, { MultiCarouselProps } from './MultiCarousel';
import { styled } from '@storybook/theming';

export default {
  title: 'Components/Multi Carousel',
  component: MultiCarousel,
};

const Template: Story<MultiCarouselProps> = (args) => {
  return (
    <Container>
      <MultiCarousel {...args}>
        {Array.from({ length: 10 }).map((_, i) => (
          <Slide key={i}>Slide {i + 1}</Slide>
        ))}
      </MultiCarousel>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
  border: 1px solid lightgray;
`;

const Slide = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  border-radius: 0.2rem;
`;

export const Basic = Template.bind({});
