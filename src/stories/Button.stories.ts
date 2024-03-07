import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button/Button';

const meta = {
  title: 'INPUT/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'primary',
    size: 'medium',
    label: 'Button',
  },
};