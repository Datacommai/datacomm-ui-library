import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DatacommSearchbar } from "./datacomm-search-bar"; // Update the import according to your file structure

// Mocking the onInput function for testing
const mockOnInput = jest.fn();

describe("DatacommSearchbar", () => {
  beforeEach(() => {
    // Clear previous mock calls before each test
    mockOnInput.mockClear();
  });

  test("renders the component with the correct placeholder and icon", () => {
    render(
      <DatacommSearchbar placeholder="Search here" onInput={mockOnInput} />
    );

    // Check if the placeholder is rendered
    const inputElement = screen.getByPlaceholderText("Search here");
    expect(inputElement).toBeInTheDocument();

    // Check if the left icon is rendered (by looking for an image with the search icon)
    const leftIcon = screen.getByAltText("Left Icon");
    expect(leftIcon).toBeInTheDocument();
  });

  test("typing inside input updates the value", () => {
    render(
      <DatacommSearchbar placeholder="Search here" onInput={mockOnInput} />
    );

    const inputElement = screen.getByPlaceholderText("Search here");

    // Simulate typing "Hello"
    fireEvent.change(inputElement, { target: { value: "Hello" } });

    // Assert: The value of the input should be updated to "Hello"
    expect(inputElement).toHaveValue("Hello");
  });

  test("calls onInput when the Enter key is pressed", () => {
    render(
      <DatacommSearchbar placeholder="Search here" onInput={mockOnInput} />
    );

    const inputElement = screen.getByPlaceholderText("Search here");

    // Simulate typing "Hello"
    fireEvent.change(inputElement, { target: { value: "Hello" } });

    // Simulate pressing Enter
    fireEvent.keyDown(inputElement, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });

    // Assert: onInput was called with the correct value
    expect(mockOnInput).toHaveBeenCalledWith("Hello");
    // Assert: onInput was called exactly once
    expect(mockOnInput).toHaveBeenCalledTimes(1);
  });
});
