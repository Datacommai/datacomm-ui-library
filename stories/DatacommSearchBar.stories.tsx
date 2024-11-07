import type { Meta, StoryObj } from "@storybook/react";
import { DatacommSearchbar } from "../app/components/search-bar/datacomm-search-bar";

const meta: Meta<typeof DatacommSearchbar> = {
  title: "Datacomm/SearchBar",
  component: DatacommSearchbar,
};

export default meta;

type Story = StoryObj<typeof DatacommSearchbar>;

export const Searchbar: Story = {
  args: {
    placeholder: "Type here...",
  },
};
