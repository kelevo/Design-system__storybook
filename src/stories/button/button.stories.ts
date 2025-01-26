import { Meta, StoryObj, Decorator } from '@storybook/html';
import { expect, userEvent, within } from "@storybook/test";
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
    //layout: 'centered',
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'black',
          value: '#000000'
        },
        {
          name: 'white',
          value: '#FFFFFF'
        }
      ]
    }
  },
  decorators: [decorator],
  render: (args) => {
    return createButton(args);
  },
  argTypes: {
    label: { control: 'text' },
    style: {
      control: { type: 'radio' },
      options: ['filled', 'outlined']
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    onClick: {
      description: 'Evento de click del boton',
      action: 'clicked',
    }
  },

} satisfies Meta<ButtonProps>;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {

  args: {
    label: 'Click me',
  },

}

Primary.play = async ({args, canvasElement}) => {

  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole('button'));
  await expect(canvas.getByText(args.label)).toBeInTheDocument();

}