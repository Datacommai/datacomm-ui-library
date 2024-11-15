import type { Meta, StoryObj } from "@storybook/react";
import { DatacommUserProfileIcon } from "@/app/components/user-profile-icon/datacomm-user-profile-icon";

const meta: Meta<typeof DatacommUserProfileIcon> = {
  title: "Datacomm/User Profile Icon",
  component: DatacommUserProfileIcon,
};

export default meta;
type Story = StoryObj<typeof DatacommUserProfileIcon>;

export const UserProfileIcon: Story = {
  args: {
    icon: "/assets/icons/user-profile-icon.svg",
  },
};
