import { Story } from '@storybook/react';
import Carousel, { CrouselProps } from './Carousel';
import { styled } from '@storybook/theming';
import { theme } from '../../theme/GlobalThemeProvide';

export default {
  title: 'Components/Carousel',
  component: Carousel,
};

const Template: Story<CrouselProps> = (args) => {
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

export const Basic = Template.bind({});

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

export const OnlyIndicators = () => {
  return (
    <Container>
      <Carousel buttons={false}>
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

const Container = styled.div`
  width: 500px;
`;

const Slide = styled.div`
  width: 100%;
  height: 300px;
`;
