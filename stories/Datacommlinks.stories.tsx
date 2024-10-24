import type { Meta, StoryObj } from "@storybook/react";
import {
  DatacommLink,
  LinkTypes,
} from "../app/components/links/datacomm-links";

const meta: Meta<typeof DatacommLink> = {
  title: "Datacomm/Link",
  component: DatacommLink,
};

export default meta;
type Story = StoryObj<typeof DatacommLink>;

export const StandardLink: Story = {
  args: {
    type: LinkTypes.STANDARD,
    title: "Standard Link",
    url: "#",
  },
};

export const SmallLink: Story = {
  args: {
    type: LinkTypes.SMALL,
    title: "Small Link",
    url: "#",
  },
};

export const UnderlinedLink: Story = {
  args: {
    type: LinkTypes.UNDERLINED,
    title: "Underlined Link",
    url: "#",
  },
};
