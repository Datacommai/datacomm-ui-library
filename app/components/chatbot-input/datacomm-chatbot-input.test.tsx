import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DatacommChatbotInput } from "./datacomm-chatbot-input";

// Mocking the onSubmit function
const mockOnSubmit = jest.fn();

describe("DatacommChatbotInput", () => {
  beforeEach(() => {
    // Reset the mock before each test
    mockOnSubmit.mockClear();
  });

  test("renders the component with the correct placeholder", () => {
    render(
      <DatacommChatbotInput
        placeholder="Type a message"
        onSubmit={mockOnSubmit}
      />
    );

    // Act & Assert: Check if the input element is rendered with the correct placeholder
    const inputElement = screen.getByPlaceholderText("Type a message");
    expect(inputElement).toBeInTheDocument(); // Input should be in the document
  });

  test("calls onSubmit when the button is clicked and clears the input", () => {
    // Arrange: Render the component with the mock onSubmit function
    render(
      <DatacommChatbotInput
        placeholder="Type a message"
        onSubmit={mockOnSubmit}
      />
    );

    // Act: Simulate entering a value in the input
    const inputElement = screen.getByPlaceholderText("Type a message");
    fireEvent.change(inputElement, { target: { value: "Hello, world!" } });

    // Ensure the input value is set correctly
    expect(inputElement).toHaveValue("Hello, world!");

    // Act: Click the submit button
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Assert: Ensure the onSubmit function was called with the correct value
    expect(mockOnSubmit).toHaveBeenCalledWith("Hello, world!");

    // Assert: Ensure the input is cleared after submit
    expect(inputElement).toHaveValue(""); // Input should be cleared
  });

  test("calls onSubmit when the Enter key is pressed and clears the input", () => {
    // Arrange: Render the component with the mock onSubmit function
    render(
      <DatacommChatbotInput
        placeholder="Type a message"
        onSubmit={mockOnSubmit}
      />
    );

    // Act: Simulate entering a value in the input
    const inputElement = screen.getByPlaceholderText("Type a message");
    fireEvent.change(inputElement, { target: { value: "Hello from Enter!" } });

    // Ensure the input value is set correctly
    expect(inputElement).toHaveValue("Hello from Enter!");

    // Act: Simulate pressing the Enter key
    fireEvent.keyDown(inputElement, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });

    // Assert: Ensure the onSubmit function was called with the correct value
    expect(mockOnSubmit).toHaveBeenCalledWith("Hello from Enter!");

    // Assert: Ensure the input is cleared after submit
    expect(inputElement).toHaveValue(""); // Input should be cleared
  });
});
