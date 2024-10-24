import type { Meta, StoryObj } from "@storybook/react";
import {
  StepBar,
  StepBarTypes,
} from "../app/components/step-bars/datacomm-step-bar";

const meta: Meta<typeof StepBar> = {
  title: "Datacomm/StepBar",
  component: StepBar,
};

export default meta;
type Story = StoryObj<typeof StepBar>;

export const ActiveStepBar: Story = {
  args: {
    type: StepBarTypes.ACTIVE,
    isActive: true,
  },
};
