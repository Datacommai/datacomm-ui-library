import type { Meta, StoryObj } from "@storybook/react";
import {
  DatacommInput,
  InputTypes,
} from "../app/components/inputs/datacomm-input";

const meta: Meta<typeof DatacommInput> = {
  title: "Datacomm/Input",
  component: DatacommInput,
};

export default meta;
type Story = StoryObj<typeof DatacommInput>;

export const Fullname: Story = {
  args: {
    type: InputTypes.FULLNAME,
    onInput: (event) => console.log(event.target.value),
  },
};

export const Email: Story = {
  args: {
    type: InputTypes.EMAIL,
    onInput: (event) => console.log(event.target.value),
  },
};

export const Password: Story = {
  args: {
    type: InputTypes.PASSWORD,
    onInput: (event) => console.log(event.target.value),
  },
};
