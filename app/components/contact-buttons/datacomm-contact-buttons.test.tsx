import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { DatacommContactButton } from "./datacomm-contact-buttons";
import "@testing-library/jest-dom"; // For the "toBeInTheDocument" matcher

// Mock Next/Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));

describe("DatacommContactButton", () => {
  const contactTypes: Array<"Phone" | "Whatsapp" | "Email" | "Invalid"> = [
    "Phone",
    "Whatsapp",
    "Email",
    "Invalid",
  ];

  test.each(contactTypes)("renders %s contact button correctly", (type) => {
    const { getByRole } = render(
      <DatacommContactButton type={type} contactInfo="test" />
    );

    const button = getByRole("button", { name: `Contact via ${type}` });
    expect(button).toBeInTheDocument();

    const image = button.querySelector("img");
    expect(image).toBeInTheDocument();
  });

  test("calls onClick handler when button is clicked", () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <DatacommContactButton
        type="Phone"
        contactInfo="1234567890"
        onClick={onClick}
      />
    );

    const button = getByRole("button", { name: "Contact via Phone" });
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("renders with correct aria-label", () => {
    const { getByRole } = render(
      <DatacommContactButton type="Email" contactInfo="test@example.com" />
    );

    const button = getByRole("button", { name: "Contact via Email" });
    expect(button).toBeInTheDocument();
  });
});
