import type { Meta, StoryObj } from "@storybook/react";
import { DatacommContactTab } from "@/app/components/contact-tab/datacomm-contact-tab";

const meta: Meta<typeof DatacommContactTab> = {
  title: "Datacomm/Conatct Tab",
  component: DatacommContactTab,
};

export default meta;

type Story = StoryObj<typeof DatacommContactTab>;

export const ContactTab: Story = {
  args: {
    username: "Ajeng Cinta Purwanti",
    profileIcon: "/assets/icons/user-profile-icon.svg",
    notificationCount: 3,
    message: "tomorrow we are going out, wanna join us?",
  },
};
