import type { Meta, StoryObj } from '@storybook/react';
import CalendarHeader from './CalendarHeader';

const meta: Meta<typeof CalendarHeader> = {
  title: 'Calendar/CalendarHeader',
  component: CalendarHeader,
  argTypes: {
    goToPrevMonth: { action: 'Go To previous Month ' },
    goToNextMonth: { action: 'Go To next Month ' },
    currentYear: { control: 'number' },
    currentMonth: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof CalendarHeader>;

export const Default: Story = {
  args: {
    currentYear: 2025,
    currentMonth: 5,
  },
};
