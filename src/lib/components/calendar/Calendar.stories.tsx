import type { Meta, StoryObj } from '@storybook/react';

import Calendar from './Calendar';
const meta: Meta<typeof Calendar> = {
  title: 'Calendar',
  component: Calendar,
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: () => <Calendar size="sm" />,
};

export const sm: Story = {
  render: () => <Calendar size="sm" />,
};
export const md: Story = {
  render: () => <Calendar size="md" />,
};
export const lg: Story = {
  render: () => <Calendar size="lg" />,
};
