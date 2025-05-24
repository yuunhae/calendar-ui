import type { Meta, StoryObj } from '@storybook/react';

import CalendarCell from './CalendarCell';

const meta: Meta<typeof CalendarCell> = {
  title: 'Calendar/CalendarCell',
  component: CalendarCell
};

export default meta;
type Story = StoryObj<typeof CalendarCell>;

export const Default: Story = {
  args: {
    day: {
        kstDate: new Date(2025, 5),
        formattedDate : '2025-05-24'
    }
  },
};
