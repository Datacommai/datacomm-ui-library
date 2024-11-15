import type { Meta, StoryObj } from "@storybook/react";
import { DatacommChatbotIcon } from "@/app/components/chatbot-icon/datacomm-chatbot-icon";

const meta: Meta<typeof DatacommChatbotIcon> = {
  title: "Datacomm/Chatbot Icon",
  component: DatacommChatbotIcon,
};

export default meta;
type Story = StoryObj<typeof DatacommChatbotIcon>;

export const ChatbotIcon: Story = {
  args: {
    icon: "/assets/icons/chatbot-icon.svg",
  },
};
