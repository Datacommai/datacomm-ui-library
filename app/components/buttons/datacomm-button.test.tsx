// DatacommButton.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // For the 'toBeInTheDocument' matcher
import { ButtonTypes, DatacommButton } from "./datacomm-button";

describe("DatacommButton", () => {
  test("renders the button with the correct title and PRIMARY style", () => {
    render(
      <DatacommButton type={ButtonTypes.PRIMARY} title="Primary Button" />
    );

    // Check if the button is in the document
    const buttonElement = screen.getByText("Primary Button");
    expect(buttonElement).toBeInTheDocument();

    // Check if the button has the correct styles for PRIMARY
    expect(buttonElement).toHaveClass("bg-[#6AB9BE]");
  });

  test("calls the onClick function when clicked", () => {
    const handleClick = jest.fn();
    render(
      <DatacommButton
        type={ButtonTypes.PRIMARY}
        title="Clickable Button"
        onClick={handleClick}
      />
    );

    const buttonElement = screen.getByText("Clickable Button");

    // Simulate a click event
    fireEvent.click(buttonElement);

    // Ensure the click handler was called
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders the button with the correct title and SECONDARY style", () => {
    render(
      <DatacommButton type={ButtonTypes.SECONDARY} title="Secondary Button" />
    );

    const buttonElement = screen.getByText("Secondary Button");

    // Check if the button is in the document
    expect(buttonElement).toBeInTheDocument();

    // Check if the button has the correct styles for SECONDARY
    expect(buttonElement).toHaveClass("bg-white");
    expect(buttonElement).toHaveClass("text-[#4A4C56]");
    expect(buttonElement).toHaveClass("border");
  });
});
