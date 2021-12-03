import { Story } from '@storybook/react';
import { Carousel } from '../components';

export default {
  title: 'Components/Carousel',
  component: Carousel,
};

interface ITemplate {
  slidesLength: number;
}

const Template: Story<ITemplate> = ({ slidesLength, ...args }) => {
  const slides = Array.from({ length: slidesLength }, (_, i) => {
    return {
      content: `https://picsum.photos/id/${i}/1600/900`,
    };
  });

  return <Carousel slides={slides} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  slidesLength: 3,
};
