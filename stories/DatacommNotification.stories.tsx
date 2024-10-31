import type { Meta, StoryObj } from "@storybook/react";
import { DatacommNotification } from "../app/components/notification/datacomm-notification";

const meta: Meta<typeof DatacommNotification> = {
  title: "Datacomm/Notification",
  component: DatacommNotification,
};

export default meta;

type Story = StoryObj<typeof DatacommNotification>;

export const Notification: Story = {
  args: {
    counter: 1,
  },
};
