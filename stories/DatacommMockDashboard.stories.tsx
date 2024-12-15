import type { Meta, StoryObj } from '@storybook/react';
import { DatacommMockDashboard } from '@/app/components/mock-dashboard/datacomm-mock-dashboard';

const meta: Meta<typeof DatacommMockDashboard> = {
 title: 'Datacomm/Mock Dashboard',
 component: DatacommMockDashboard,
};

export default meta;

type Story = StoryObj<typeof DatacommMockDashboard>;

export const Primary: Story = {
 render: () => <DatacommMockDashboard />,
};
