import type { Meta, StoryObj } from "@storybook/react";
import { DatacommSideBar } from "@/app/components/side-bar/datacomm-side-bar";
import {
  BriefcaseBusiness,
  Building2Icon,
  CircleHelp,
  Contact,
  MessageSquareTextIcon,
  ReceiptText,
  Settings,
} from "lucide-react";

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
        leftIcon: MessageSquareTextIcon,
        notificationCount: 7,
        onClick: () => alert("Navigating to Conversations"),
      },
      {
        title: "Clients",
        url: "#",
        leftIcon: Contact,
        onClick: () => alert("Navigating to Clients"),
      },
      {
        title: "Properties",
        url: "#",
        leftIcon: Building2Icon,
        onClick: () => alert("Navigating to Properties"),
      },
      {
        title: "Tasks",
        url: "#",
        leftIcon: BriefcaseBusiness,
        onClick: () => alert("Navigating to Tasks"),
      },
      {
        title: "To-Do Lists",
        url: "#",
        leftIcon: ReceiptText,
        onClick: () => alert("Navigating to To-Do Lists"),
      },
    ],
    bottomItems: [
      {
        title: "Settings",
        url: "#",
        leftIcon: Settings,
        onClick: () => alert("Navigating to Settings"),
      },
      {
        title: "Help",
        url: "#",
        leftIcon: CircleHelp,
        onClick: () => alert("Navigating to Help"),
      },
    ],
  },
};
