import type { Meta, StoryObj } from "@storybook/react";
import { DatacommContactButton } from "@/app/components/contact-buttons/datacomm-contact-buttons";

const meta: Meta<typeof DatacommContactButton> = {
  title: "Datacomm/Contact Buttons",
  component: DatacommContactButton,
};

export default meta;
type Story = StoryObj<typeof DatacommContactButton>;

export const Phone: Story = {
  args: {
    type: "Phone",
    contactInfo: "+1234567890",
    onClick: () => alert("Calling +1234567890..."),
  },
};

export const Whatsapp: Story = {
  args: {
    type: "Whatsapp",
    contactInfo: "+1234567890",
    onClick: () => alert("Opening WhatsApp chat..."),
  },
};

export const Email: Story = {
  args: {
    type: "Email",
    contactInfo: "example@example.com",
    onClick: () => alert("Opening email client for example@example.com..."),
  },
};
