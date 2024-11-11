import type { Meta, StoryObj } from "@storybook/react";
import { DatacommChatbotInput } from "../app/components/chatbot-input/datacomm-chatbot-input";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof DatacommChatbotInput> = {
  title: "Datacomm/Chatbot Input",
  component: DatacommChatbotInput,
};

export default meta;

type Story = StoryObj<typeof DatacommChatbotInput>;

export const ChatbotInput: Story = {
  args: {
    placeholder: "Type here...",
    onSubmit: (inputValue: string) => {
      console.log(inputValue);
      action("onSubmit")(inputValue);
    },
  },
};
