import type { Meta, StoryObj } from "@storybook/react";
import DatacommChatSection from "@/app/components/chat-section/datacomm-chat-section";

// Meta configuration for the Storybook entry
const meta: Meta<typeof DatacommChatSection> = {
  title: "Datacomm/Chat Section Mock Data",
  component: DatacommChatSection,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Centers the component in the Storybook canvas
  },
};

export default meta;

type Story = StoryObj<typeof DatacommChatSection>;

export const Default: Story = {
  args: {},
  render: () => <DatacommChatSection />,
};
