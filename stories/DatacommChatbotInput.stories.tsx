import type { Meta, StoryObj } from "@storybook/react";
import { DatacoomChatbotInput } from "../app/components/chatbot-input/datacomm-chatbot-input";

// Metadata for the Storybook story
const meta: Meta<typeof DatacoomChatbotInput> = {
  title: "Datacomm/Chatbot Input",
  component: DatacoomChatbotInput,
};

export default meta;

type Story = StoryObj<typeof DatacoomChatbotInput>;

export const ChatbotInput: Story = {
  args: {
    placeholder: "Type here...",
  },
};
