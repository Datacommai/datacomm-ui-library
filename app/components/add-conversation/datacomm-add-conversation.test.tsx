import { render, screen, fireEvent } from "@testing-library/react";
import { DatacommAddConversation } from "./datacomm-add-conversation";
import "@testing-library/jest-dom";

describe("DatacommAddConversation Component", () => {
  const mockProps = {
    title: "Test Title",
    first_icon: "/icons/first-icon.svg",
    second_icon: "/icons/second-icon.svg",
    onClick: jest.fn(),
  };

  it("renders correctly with given props", () => {
    render(
      <DatacommAddConversation
        title={mockProps.title}
        first_icon={mockProps.first_icon}
        second_icon={mockProps.second_icon}
        onClick={mockProps.onClick}
      />
    );

    // Check for title
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();

    // Check for first icon alt text
    expect(screen.getByAltText("first-icon")).toBeInTheDocument();

    // Check for second icon alt text
    expect(screen.getByAltText("second-icon")).toBeInTheDocument();
  });

  it("calls the onClick handler when the button is clicked", () => {
    render(
      <DatacommAddConversation
        title={mockProps.title}
        first_icon={mockProps.first_icon}
        second_icon={mockProps.second_icon}
        onClick={mockProps.onClick}
      />
    );

    const button = screen.getByRole("button");

    // Simulate a click event
    fireEvent.click(button);

    // Verify the onClick handler was called
    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });
});
