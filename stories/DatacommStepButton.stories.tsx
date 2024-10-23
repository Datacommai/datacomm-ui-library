import type { Meta, StoryObj } from "@storybook/react";
import {
  StepButton,
  StepButtonTypes,
} from "../app/components/step-buttons/datacomm-step-button";

const meta: Meta<typeof StepButton> = {
  title: "Datacomm/StepButton",
  component: StepButton,
};

export default meta;
type Story = StoryObj<typeof StepButton>;

export const BackButton: Story = {
  args: {
    type: StepButtonTypes.BACK,
  },
};

export const ForwardButton: Story = {
  args: {
    type: StepButtonTypes.FORWARD,
  },
};
