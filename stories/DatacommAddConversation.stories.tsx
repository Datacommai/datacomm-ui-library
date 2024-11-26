import type { Meta, StoryObj } from "@storybook/react";
import { DatacommAddConversation } from "@/app/components/add-conversation/datacomm-add-conversation";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof DatacommAddConversation> = {
  title: "Datacomm/Add Conversation",
  component: DatacommAddConversation,
};

export default meta;
type Story = StoryObj<typeof DatacommAddConversation>;

export const Primary: Story = {
  args: {
    title: "Conversation",
    first_icon: "/assets/icons/message-icon.svg",
    second_icon: "/assets/icons/add-more-icon.svg",
    onClick: () => {
      console.log("added");
      action("add button clicked")();
    },
  },
};
