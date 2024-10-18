import type { Meta, StoryObj } from "@storybook/react";

import {
  DatacommButton,
  ButtonTypes,
} from "../app/components/buttons/datacomm-button";

const meta: Meta<typeof DatacommButton> = {
  title: "Datacomm/Button",
  component: DatacommButton,
};

export default meta;
type Story = StoryObj<typeof DatacommButton>;

export const Primary: Story = {
  args: {
    type: ButtonTypes.PRIMARY,
    title: "Sign Up",
  },
};

export const Secondary: Story = {
  args: {
    type: ButtonTypes.SECONDARY,
    title: "Log In",
  },
};
