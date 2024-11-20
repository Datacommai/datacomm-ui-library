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

  // Mock scrollHeight and offsetHeight for DOM elements
  beforeEach(() => {
    jest
      .spyOn(HTMLElement.prototype, "scrollHeight", "get")
      .mockReturnValue(200); // Simulated content height
    jest
      .spyOn(HTMLElement.prototype, "offsetHeight", "get")
      .mockReturnValue(100); // Simulated visible height
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Restore original behavior after each test
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
    await screen.findByText("Text to copy");

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

  it("should toggle text expansion on 'view more' click", () => {
    render(
      <DatacommChatbotMessage
        user="Bot"
        text="This is a long message that should be truncated initially and expanded when clicked. This should show more content when expanded."
        onCopy={mockOnCopy}
        onRefresh={mockOnRefresh}
        onShare={mockOnShare}
        isGoodFeedback={mockIsGoodFeedback}
      />
    );

    // Check if "view more" button is rendered
    const viewMoreButton = screen.getByText("view more");
    expect(viewMoreButton).toBeInTheDocument();

    // Ensure the truncated message is visible
    const truncatedMessage = screen.getByText(
      /This is a long message that should be truncated initially/
    );
    expect(truncatedMessage).toBeInTheDocument();

    // Simulate clicking "view more"
    fireEvent.click(viewMoreButton);

    // Verify the button text changes to "view less"
    expect(viewMoreButton).toHaveTextContent("view less");

    // Ensure the full message is displayed
    const expandedMessage = screen.getByText(
      /This is a long message that should be truncated initially and expanded when clicked/
    );
    expect(expandedMessage).toBeInTheDocument();

    // Simulate clicking "view less"
    fireEvent.click(viewMoreButton);

    // Verify the button text changes back to "view more"
    expect(viewMoreButton).toHaveTextContent("view more");

    // Ensure the message is truncated again
    const collapsedMessage = screen.getByText(
      /This is a long message that should be truncated initially/
    );
    expect(collapsedMessage).toBeInTheDocument();
  });
});
