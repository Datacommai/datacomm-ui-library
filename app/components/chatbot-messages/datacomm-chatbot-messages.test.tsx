import { render, screen, fireEvent } from "@testing-library/react";
import { DatacommChatbotMessage } from "./datacomm-chatbot-messages"; // Adjust path if needed
import "@testing-library/jest-dom"; // For the "toBeInTheDocument" matcher

// Mock the onCopy function
const mockOnCopy = jest.fn();
const mockOnRefresh = jest.fn();
const mockOnShare = jest.fn();
const mockIsGoodFeedback = jest.fn();

describe("DatacommChatbotMessage", () => {
  // Mock the clipboard.writeText function
  beforeAll(() => {
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: jest.fn().mockResolvedValue(undefined), // Mock successful clipboard copy
      },
      configurable: true,
    });
  });

  it("should render correctly for 'Bot' user", () => {
    render(
      <DatacommChatbotMessage
        user="Bot"
        text="Hello, I'm a bot message"
        onCopy={mockOnCopy}
        onRefresh={mockOnRefresh}
        onShare={mockOnShare}
        isGoodFeedback={mockIsGoodFeedback}
      />
    );

    // Check if the message is rendered
    expect(screen.getByText("Hello, I'm a bot message")).toBeInTheDocument();

    // Check if the correct styles for 'Bot' user are applied
    const messageDiv = screen.getByText(
      "Hello, I'm a bot message"
    ).parentElement;
    expect(messageDiv).toHaveClass("bg-[#FDF6FF]"); // Bot-specific background
    expect(messageDiv).toHaveClass("text-[#1D1F2C]"); // Bot-specific text color

    // Check for button existence (like, dislike, refresh, share, copy)
    expect(screen.getByTestId("like-button")).toBeInTheDocument();
    expect(screen.getByTestId("dislike-button")).toBeInTheDocument();
    expect(screen.getByTestId("refresh-button")).toBeInTheDocument();
    expect(screen.getByTestId("share-button")).toBeInTheDocument();
    expect(screen.getByTestId("copy-button")).toBeInTheDocument();
  });

  it("should render correctly for 'Person' user", () => {
    render(
      <DatacommChatbotMessage
        user="Person"
        text="Hello, I'm a person message"
        onCopy={mockOnCopy}
        onRefresh={mockOnRefresh}
        onShare={mockOnShare}
        isGoodFeedback={mockIsGoodFeedback}
      />
    );

    // Check if the message is rendered
    expect(screen.getByText("Hello, I'm a person message")).toBeInTheDocument();

    // Check if the correct styles for 'Person' user are applied
    const messageDiv = screen.getByText(
      "Hello, I'm a person message"
    ).parentElement;
    expect(messageDiv).toHaveClass("bg-[#D3F4EF]"); // Person-specific background
    expect(messageDiv).toHaveClass("text-[#1D1F2C]"); // Person-specific text color

    // Check if the time is rendered for Person
    const timeElement = screen.getByText(/:/); // Checks if time like "12:34" is displayed
    expect(timeElement).toBeInTheDocument();

    // Check for button existence (should not be visible for "Person")
    expect(screen.queryByTestId("like-button")).not.toBeInTheDocument();
    expect(screen.queryByTestId("dislike-button")).not.toBeInTheDocument();
    expect(screen.queryByTestId("refresh-button")).not.toBeInTheDocument();
    expect(screen.queryByTestId("share-button")).not.toBeInTheDocument();
    expect(screen.queryByTestId("copy-button")).not.toBeInTheDocument();
  });

  it("should call onCopy when copy button is clicked", async () => {
    render(
      <DatacommChatbotMessage
        user="Bot"
        text="Text to copy"
        onCopy={mockOnCopy}
        onRefresh={mockOnRefresh}
        onShare={mockOnShare}
        isGoodFeedback={mockIsGoodFeedback}
      />
    );

    // Get the copy button and click it
    const copyButton = screen.getByTestId("copy-button");
    fireEvent.click(copyButton);

    // Wait for the async operation to complete (clipboard copy)
    await screen.findByText("Text to copy"); // You can also use any other async assertion if you expect a UI change after copy

    // Assert that the onCopy callback was triggered with the correct text
    expect(mockOnCopy).toHaveBeenCalledWith("Text to copy");
    expect(mockOnCopy).toHaveBeenCalledTimes(1); // Ensure it was called once
  });

  it("should call onRefresh when refresh button is clicked", () => {
    render(
      <DatacommChatbotMessage
        user="Bot"
        text="Refresh me"
        onCopy={mockOnCopy}
        onRefresh={mockOnRefresh}
        onShare={mockOnShare}
        isGoodFeedback={mockIsGoodFeedback}
      />
    );

    const refreshButton = screen.getByTestId("refresh-button");
    fireEvent.click(refreshButton);

    expect(mockOnRefresh).toHaveBeenCalled();
  });

  it("should call onShare when share button is clicked", () => {
    render(
      <DatacommChatbotMessage
        user="Bot"
        text="Share me"
        onCopy={mockOnCopy}
        onRefresh={mockOnRefresh}
        onShare={mockOnShare}
        isGoodFeedback={mockIsGoodFeedback}
      />
    );

    const shareButton = screen.getByTestId("share-button");
    fireEvent.click(shareButton);

    expect(mockOnShare).toHaveBeenCalled();
  });

  it("should call isGoodFeedback when like button is clicked", () => {
    render(
      <DatacommChatbotMessage
        user="Bot"
        text="Like this"
        onCopy={mockOnCopy}
        onRefresh={mockOnRefresh}
        onShare={mockOnShare}
        isGoodFeedback={mockIsGoodFeedback}
      />
    );

    const likeButton = screen.getByTestId("like-button");
    fireEvent.click(likeButton);

    expect(mockIsGoodFeedback).toHaveBeenCalledWith(true);
  });

  it("should call isGoodFeedback when dislike button is clicked", () => {
    render(
      <DatacommChatbotMessage
        user="Bot"
        text="Dislike this"
        onCopy={mockOnCopy}
        onRefresh={mockOnRefresh}
        onShare={mockOnShare}
        isGoodFeedback={mockIsGoodFeedback}
      />
    );

    const dislikeButton = screen.getByTestId("dislike-button");
    fireEvent.click(dislikeButton);

    expect(mockIsGoodFeedback).toHaveBeenCalledWith(false);
  });
});
