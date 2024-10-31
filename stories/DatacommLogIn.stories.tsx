import type { Meta, StoryObj } from "@storybook/react";
import { DatacommLogIn } from "../app/components/log-in/datacomm-log-in";

const meta: Meta<typeof DatacommLogIn> = {
  title: "Datacomm/LogIn",
  component: DatacommLogIn,
};
export default meta;

type Story = StoryObj<typeof DatacommLogIn>;

export const LogIn: Story = {
  args: {
    title: "Welcome",
    description:
      "Use Datacomm to start building personalized outreach for your clients",
    logo: "/assets/images/mock-logo.svg",
    width: "497px",
    height: "fit-content",
  },
};
