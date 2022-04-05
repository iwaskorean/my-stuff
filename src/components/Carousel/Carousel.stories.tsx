import { Story } from '@storybook/react';
import Carousel, { CarouselProps } from './Carousel';
import InfiniteCarousel, { InfiniteCarouselProps } from './InfiniteCarousel';
import { styled } from '@storybook/theming';
import { theme } from '../../theme/GlobalThemeProvide';

export default {
  title: 'Components/Carousel',
  component: Carousel,
};

const Template: Story<CarouselProps> = (args) => {
  return (
    <Container>
      <Carousel {...args}>
        <Carousel.Item>
          <Slide style={{ backgroundColor: theme.color.gray100 }} />
        </Carousel.Item>
        <Carousel.Item>
          <Slide style={{ backgroundColor: theme.color.gray200 }} />
        </Carousel.Item>
        <Carousel.Item>
          <Slide style={{ backgroundColor: theme.color.gray300 }} />
        </Carousel.Item>
        <Carousel.Item>
          <Slide style={{ backgroundColor: theme.color.gray400 }} />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

const InfiniteTemplate: Story<InfiniteCarouselProps> = (args) => {
  return (
    <Container>
      <InfiniteCarousel {...args}>
        <InfiniteCarousel.Item>
          <Slide style={{ backgroundColor: theme.color.gray100 }}>
            Slide 1
          </Slide>
        </InfiniteCarousel.Item>
        <InfiniteCarousel.Item>
          <Slide style={{ backgroundColor: theme.color.gray200 }}>
            Slide 2
          </Slide>
        </InfiniteCarousel.Item>
        <InfiniteCarousel.Item>
          <Slide style={{ backgroundColor: theme.color.gray300 }}>
            Slide 3
          </Slide>
        </InfiniteCarousel.Item>
        <InfiniteCarousel.Item>
          <Slide style={{ backgroundColor: theme.color.gray400 }}>
            Slide 4
          </Slide>
        </InfiniteCarousel.Item>
      </InfiniteCarousel>
    </Container>
  );
};

export const Basic = Template.bind({});

export const Infinite = InfiniteTemplate.bind({});

export const ContainOneSlide = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <Slide style={{ backgroundColor: theme.color.gray200 }} />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export const OnlyButtons = () => {
  return (
    <Container>
      <Carousel indicators={false}>
        <Carousel.Item>
          <Slide style={{ backgroundColor: theme.color.gray100 }} />
        </Carousel.Item>
        <Carousel.Item>
          <Slide style={{ backgroundColor: theme.color.gray200 }} />
        </Carousel.Item>
        <Carousel.Item>
          <Slide style={{ backgroundColor: theme.color.gray300 }} />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export const OnlyIndicators = () => {
  return (
    <Container>
      <Carousel buttons={false}>
        <Carousel.Item>
          <Slide style={{ backgroundColor: theme.color.gray100 }} />
        </Carousel.Item>
        <Carousel.Item>
          <Slide style={{ backgroundColor: theme.color.gray200 }} />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
`;

const Slide = styled.div`
  width: 100%;
  height: 300px;
  padding: 1rem;
  font-size: 2rem;
`;
