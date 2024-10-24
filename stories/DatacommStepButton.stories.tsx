import type { Meta, StoryObj } from '@storybook/react';
import {
 StepButton,
 StepButtonTypes,
} from '../app/components/step-buttons/datacomm-step-button';

const meta: Meta<typeof StepButton> = {
 title: 'Datacomm/StepButton',
 component: StepButton,
};

export default meta;
type Story = StoryObj<typeof StepButton>;

const backgroundDecorator = (Story: () => JSX.Element) => (
 <div style={{ backgroundColor: 'lightGrey', padding: '20px' }}>
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
