import { Meta, StoryObj } from '@storybook/html';
import { createCard } from './Card';
import type { CardProps } from './Card';

export default {

  title: 'Design System/Atoms/Card',
  tags: ['Design Systems', 'Atoms'],
  render: (args) => {
    return createCard(args);
  },

} satisfies Meta<CardProps>;

type Story = StoryObj<CardProps>;

export const Primary: Story = {

  args: {
    title: 'Title of card',
    description: 'Dummy description for card'
  },

}