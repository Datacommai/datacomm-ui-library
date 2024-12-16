import { Meta, StoryObj } from "@storybook/react";
import { DatacommUserInfo } from "@/app/components/user-info/datacomm-user-info";

// Define the component's metadata
const meta: Meta<typeof DatacommUserInfo> = {
  title: "Components/DatacommUserInfo",
  component: DatacommUserInfo,
  argTypes: {
    profileIcon: { control: "text" },
    fullname: { control: "text" },
    money: { control: "number" },
  },
};

export default meta;

type Story = StoryObj<typeof DatacommUserInfo>;

// Default story
export const Default: Story = {
  args: {
    profileIcon: "/assets/icons/user-profile-icon.svg", // Replace with your image URL or use a mock URL
    fullname: "Ajeng Cinta Purwanti",
    money: 1000,
    tabs: [
      { id: "tab1", name: "Details" },
      { id: "tab2", name: "Preference" },
      { id: "tab3", name: "Notes/ Summary" },
      { id: "tab4", name: "Messages" },
    ],
  },
};
