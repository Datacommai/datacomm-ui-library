import type { Meta, StoryObj } from "@storybook/react";
import { DatacommChatbotMessage } from "../app/components/chatbot-messages/datacomm-chatbot-messages";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof DatacommChatbotMessage> = {
  title: "Datacomm/Chatbot Messages",
  component: DatacommChatbotMessage,
};

export default meta;

type Story = StoryObj<typeof DatacommChatbotMessage>;

export const ChatbotMessages: Story = {
  args: {
    user: "Person",
    text: "Please start the process of Mr. Michel Emrad onboarding, send them a welcome email, and schedule mail for tomorrow about reminding them.",

    isGoodFeedback: (feedback: boolean) => {
      console.log(feedback ? "Liked!" : "Disliked!");
      action("Feedback Action")(feedback ? "Liked" : "Disliked");
    },
    onRefresh: () => {
      console.log("Refreshing...");
      action("Refresh Clicked")();
    },
    onShare: () => {
      console.log("Sharing...");
      action("Share Clicked")();
    },

    onCopy: (text: string) => {
      console.log("Copied text: ", text);
      action("Copy Clicked")(text);
    },
  },
};
