// src/App.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '@/lib/components/calendar/Calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Calendar/Calendar',
  component: Calendar,
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
    args: {
    currentYear: 2025,
    currentMonth: 6,
    goToPrevMonth: () => console.log('Prev'),
    goToNextMonth: () => console.log('Next'),
  },
};
