import { Meta, StoryObj } from '@storybook/html';
import { createButton } from './Button';
import type { ButtonProps } from './Button';

export default {

  title: 'Design System/Atoms/Button',
  tags: ['Design Systems', 'Atoms'],
  render: (args) => {
    return createButton(args);
  },

} satisfies Meta<ButtonProps>;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {

  args: {
    label: 'Click me',
  },

}