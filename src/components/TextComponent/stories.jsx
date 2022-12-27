import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Reprehenderit qui ut dolore. Voluptatibus labore, assumenda quo,
    cumque ratione aliquid praesentium libero deleniti velit sint,
    corrupti voluptates aut accusamus maxime doloribus.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return <TextComponent {...args} />;
};
