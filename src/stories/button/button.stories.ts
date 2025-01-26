import { Meta, StoryObj, Decorator } from '@storybook/html';
import { createButton } from './Button';
import type { ButtonProps } from './Button';

const decorator: Decorator = (story) => {
  const container = document.createElement('div');
  container.style.margin = '3rem';

  const storyContent = story();
  if (storyContent instanceof HTMLElement) {
    container.appendChild(storyContent);
  } else if (typeof storyContent === 'string') {
    container.innerHTML = storyContent;
  }

  return container;
};

export default {

  title: 'Design System/Atoms/Button',
  tags: ['Design Systems', 'Atoms'],
  parameters: {
    layout: 'centered',
  },
  decorators: [decorator],
  render: (args) => {
    return createButton(args);
  },
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    style: {
      control: { type: 'radio' },
      options: ['filled', 'outlined']
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },

} satisfies Meta<ButtonProps>;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {

  args: {
    label: 'Click me',
  },

}