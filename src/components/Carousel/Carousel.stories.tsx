import { Story } from '@storybook/react';
import Carousel, { CrouselProps } from './Carousel';
import { styled } from '@storybook/theming';

export default {
  title: 'Components/Carousel',
  component: Carousel,
};

const Template: Story<CrouselProps> = (args) => {
  return (
    <Container>
      <Carousel {...args}>
        <Carousel.Item>
          <img src='http://placehold.it/500x300' alt='' />
        </Carousel.Item>
        <Carousel.Item>
          <img src='http://placehold.it/500x300' alt='' />
        </Carousel.Item>
        <Carousel.Item>
          <img src='http://placehold.it/500x300' alt='' />
        </Carousel.Item>
        <Carousel.Item>
          <img src='http://placehold.it/500x300' alt='' />
        </Carousel.Item>
        <Carousel.Item>
          <img src='http://placehold.it/500x300' alt='' />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export const Basic = Template.bind({});

export const ContainOneSlide = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img src='http://placehold.it/500x300' alt='' />
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
          <img src='http://placehold.it/500x300' alt='' />
        </Carousel.Item>
        <Carousel.Item>
          <img src='http://placehold.it/500x300' alt='' />
        </Carousel.Item>
        <Carousel.Item>
          <img src='http://placehold.it/500x300' alt='' />
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
          <img src='http://placehold.it/500x300' alt='' />
        </Carousel.Item>
        <Carousel.Item>
          <img src='http://placehold.it/500x300' alt='' />
        </Carousel.Item>
        <Carousel.Item>
          <img src='http://placehold.it/500x300' alt='' />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
`;
