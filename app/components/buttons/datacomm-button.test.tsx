// DatacommButton.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // For the 'toBeInTheDocument' matcher
import {
  ButtonTypes,
  ButtonIconTypes,
  DatacommButton,
} from "./datacomm-button";

describe("DatacommButton", () => {
  test("renders the button with the correct title and PRIMARY style", () => {
    render(
      <DatacommButton
        type={ButtonTypes.PRIMARY}
        title="Primary Button"
        iconType={ButtonIconTypes.NONE}
      />
    );

    const buttonElement = screen.getByText("Primary Button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("bg-[#6AB9BE]");
    expect(buttonElement).toHaveClass("text-white");
  });

  test("calls the onClick function when clicked", () => {
    const handleClick = jest.fn();
    render(
      <DatacommButton
        type={ButtonTypes.PRIMARY}
        title="Clickable Button"
        onClick={handleClick}
        iconType={ButtonIconTypes.NONE}
      />
    );

    const buttonElement = screen.getByText("Clickable Button");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders the button with the correct title and SECONDARY style", () => {
    render(
      <DatacommButton
        type={ButtonTypes.SECONDARY}
        title="Secondary Button"
        iconType={ButtonIconTypes.NONE}
      />
    );

    const buttonElement = screen.getByText("Secondary Button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("bg-transparent");
    expect(buttonElement).toHaveClass("text-[#4A4C56]");
    expect(buttonElement).toHaveClass("border");
  });

  test("renders the button with PASSKEY icon", () => {
    render(
      <DatacommButton
        type={ButtonTypes.PRIMARY}
        title="With Passkey Icon"
        iconType={ButtonIconTypes.PASSKEY}
      />
    );

    const buttonElement = screen.getByText("With Passkey Icon");
    const iconElement = screen.getByAltText("Passkey");
    expect(buttonElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  test("renders the button with GOOGLE icon", () => {
    render(
      <DatacommButton
        type={ButtonTypes.SECONDARY}
        title="With Google Icon"
        iconType={ButtonIconTypes.GOOGLE}
      />
    );

    const buttonElement = screen.getByText("With Google Icon");
    const iconElement = screen.getByAltText("Google");
    expect(buttonElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });
});
