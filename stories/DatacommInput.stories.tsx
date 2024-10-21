import type { Meta, StoryObj } from "@storybook/react";
import {
  DatacommInput,
  InputTypes,
  InputIconTypes,
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
    iconType: InputIconTypes.USER,
    placeholder: "Full Name",
    onInput: (event) => console.log(event.target.value),
  },
};

export const Email: Story = {
  args: {
    type: InputTypes.EMAIL,
    iconType: InputIconTypes.EMAIL,
    placeholder: "Email address",
    onInput: (event) => console.log(event.target.value),
  },
};

export const Password: Story = {
  args: {
    type: InputTypes.PASSWORD,
    iconType: InputIconTypes.LOCK,
    placeholder: "Password",
    onInput: (event) => console.log(event.target.value),
  },
};
