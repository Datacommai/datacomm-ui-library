import type { Meta, StoryObj } from "@storybook/react";
import { DatacommSignUp } from "../app/components/sign-up/datacomm-sign-up";

const meta: Meta<typeof DatacommSignUp> = {
  title: "Datacomm/SignUp",
  component: DatacommSignUp,
};

export default meta;

type Story = StoryObj<typeof DatacommSignUp>;

export const SignUp: Story = {
  args: {
    title: "Welcome",
    description:
      "Sign up to Datacomm to start building personalized outreach for your clients.",
    logo: "/assets/images/mock-logo.svg",
    companyname: "DataComm!",
  },
};
