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
    // If DatacommSignUp requires props, add them here
  },
};
