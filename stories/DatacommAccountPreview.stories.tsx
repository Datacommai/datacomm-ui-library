import type { Meta, StoryObj } from "@storybook/react";
import { DatacommAccountPreview } from "@/app/components/account-perview/datacomm-account-perview";
import { Switch } from "@/components/ui/switch";

const meta: Meta<typeof DatacommAccountPreview> = {
  title: "Datacomm/Account Preview",
  component: DatacommAccountPreview,
};

export default meta;

type Story = StoryObj<typeof DatacommAccountPreview>;

export const Primary: Story = {
  args: {
    profileIcon: "/assets/icons/user-profile-icon.svg",
    fullname: "John Doe",
    jobDescription: "Software Engineer",
    dropdownItems: [
      {
        name: "Theme",
        id: "1",
        leftIcon: "/assets/icons/theme-icon.svg",
        rightElement: (
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex w-full items-center"
          >
            <Switch />
          </div>
        ),
      },
      {
        name: "Help & Support",
        id: "2",
        leftIcon: "/assets/icons/help-icon.svg",
        rightElement: null,
      },
      {
        name: "Settings",
        id: "3",
        leftIcon: "/assets/icons/setting-icon.svg",
        rightElement: null,
      },
      {
        name: "Log Out",
        id: "4",
        leftIcon: "/assets/icons/logout-icon.svg",
        rightElement: null,
      },
    ],
  },
};
