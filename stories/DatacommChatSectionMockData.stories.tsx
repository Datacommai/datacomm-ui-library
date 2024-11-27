import type { Meta, StoryObj } from "@storybook/react";
import DatacommChatSectionMockData from "@/app/mock-data/datacomm-chat-section-mock-data";

// Meta configuration for the Storybook entry
const meta: Meta<typeof DatacommChatSectionMockData> = {
  title: "Datacomm/Chat Section Mock Data",
  component: DatacommChatSectionMockData,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Centers the component in the Storybook canvas
  },
};

export default meta;

type Story = StoryObj<typeof DatacommChatSectionMockData>;

export const Default: Story = {
  args: {},
  render: () => <DatacommChatSectionMockData />,
};
