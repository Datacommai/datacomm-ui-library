import type { Meta, StoryObj } from "@storybook/react";
import {
  DatacommStepBar,
  StepBarTypes,
} from "../app/components/step-bars/datacomm-step-bar";

const meta: Meta<typeof DatacommStepBar> = {
  title: "Datacomm/StepBar",
  component: DatacommStepBar,
};

export default meta;
type Story = StoryObj<typeof DatacommStepBar>;

const backgroundDecorator = (Story: () => JSX.Element) => (
  <div style={{ backgroundColor: "lightGrey", padding: "20px" }}>
    <Story />
  </div>
);

export const StepBar: Story = {
  args: {
    type: StepBarTypes.ACTIVE,
    isActive: true,
  },
  decorators: [backgroundDecorator],
};
