import type { Meta, StoryObj } from "@storybook/react";
import { DatacommUserInformation } from "../app/components/user-information-tab/datacomm-user-information-tab";

const meta: Meta<typeof DatacommUserInformation> = {
  title: "Datacomm/UserInformatio",
  component: DatacommUserInformation,
};

export default meta;

type Story = StoryObj<typeof DatacommUserInformation>;

export const UserInformation: Story = {
  args: {
    username: "Ajeng Cinta Purwanti",

    purchasedItemsCount: 21,
    lifetimeValue: 1235.73,
  },
};
