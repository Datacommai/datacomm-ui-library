import type { Meta, StoryObj } from "@storybook/react";
import {
  DatacommStepButton,
  StepButtonTypes,
} from "../app/components/step-buttons/datacomm-step-button";

const meta: Meta<typeof DatacommStepButton> = {
  title: "Datacomm/StepButton",
  component: DatacommStepButton,
};

export default meta;
type Story = StoryObj<typeof DatacommStepButton>;

const backgroundDecorator = (Story: () => JSX.Element) => (
  <div style={{ backgroundColor: "lightGrey", padding: "20px" }}>
    <Story />
  </div>
);

export const BackButton: Story = {
  args: {
    type: StepButtonTypes.BACK,
    onStepChange(step) {
      console.log(step);
    },
  },
  decorators: [backgroundDecorator],
};

export const ForwardButton: Story = {
  args: {
    type: StepButtonTypes.FORWARD,
    onStepChange(step) {
      console.log(step);
    },
  },
  decorators: [backgroundDecorator],
};
