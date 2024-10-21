import type { Meta, StoryObj } from "@storybook/react";
import {
  DatacommButton,
  ButtonTypes,
  ButtonIconTypes,
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
    iconType: ButtonIconTypes.NONE,
  },
};

export const Secondary: Story = {
  args: {
    type: ButtonTypes.SECONDARY,
    title: "Log In",
    iconType: ButtonIconTypes.NONE,
  },
};

export const PrimaryWithPasskeyIcon: Story = {
  args: {
    type: ButtonTypes.PRIMARY,
    title: "Sign Up with Passkey",
    iconType: ButtonIconTypes.PASSKEY,
  },
};

export const SecondaryWithGoogleIcon: Story = {
  args: {
    type: ButtonTypes.SECONDARY,
    title: "Log In with Google",
    iconType: ButtonIconTypes.GOOGLE,
  },
};
