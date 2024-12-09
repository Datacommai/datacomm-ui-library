import type { Meta, StoryObj } from "@storybook/react";
import { DatacommSideBar } from "@/app/components/side-bar/datacomm-side-bar";

const meta: Meta<typeof DatacommSideBar> = {
  title: "Datacomm/Side Bar",
  component: DatacommSideBar,
};

export default meta;

type Story = StoryObj<typeof DatacommSideBar>;

export const SideBar: Story = {
  args: {
    logo: "/assets/images/mock-logo.svg",
    topItems: [
      {
        title: "Conversations",
        url: "#",
        leftIcon: "/assets/icons/conversation-icon.svg",
        notificationCount: 7,
        onClick: () => console.log("Navigating to Conversations"),
      },
      {
        title: "Clients",
        url: "#",
        leftIcon: "/assets/icons/client-icon.svg",
        onClick: () => console.log("Navigating to Clients"),
      },
      {
        title: "Properties",
        url: "#",
        leftIcon: "/assets/icons/buliding-icon.svg",
        onClick: () => console.log("Navigating to Properties"),
      },
      {
        title: "Tasks",
        url: "#",
        leftIcon: "/assets/icons/tasks-icon.svg",
        notificationCount: 3,
        onClick: () => console.log("Navigating to Tasks"),
      },
      {
        title: "To-Do Lists",
        url: "#",
        leftIcon: "/assets/icons/todolist-icon.svg",
        onClick: () => console.log("Navigating to To-Do Lists"),
      },
    ],
    bottomItems: [
      {
        title: "Settings",
        url: "#",
        leftIcon: "/assets/icons/setting-icon.svg",
        onClick: () => console.log("Navigating to Settings"),
      },
      {
        title: "Help",
        url: "#",
        leftIcon: "/assets/icons/help-icon.svg",
        onClick: () => console.log("Navigating to Help"),
      },
    ],
  },
};
