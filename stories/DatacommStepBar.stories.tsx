import type { Meta, StoryObj } from "@storybook/react";
import {
  StepBar,
  StepBarTypes,
} from "../app/components/stepbars/datacomm-step-bar";

const meta: Meta<typeof StepBar> = {
  title: "Components/StepBar",
  component: StepBar,
};

export default meta;
type Story = StoryObj<typeof StepBar>;

const backgroundDecorator = (Story: () => JSX.Element) => (
  <div style={{ backgroundColor: "lightGrey", padding: "20px" }}>
    <Story />
  </div>
);

export const ActiveStepBar: Story = {
  args: {
    type: StepBarTypes.ACTIVE,
    isActive: true,
  },
  decorators: [backgroundDecorator],
};

export const InactiveStepBar: Story = {
  args: {
    type: StepBarTypes.INACTIVE,
    isActive: false,
  },
  decorators: [backgroundDecorator],
};
