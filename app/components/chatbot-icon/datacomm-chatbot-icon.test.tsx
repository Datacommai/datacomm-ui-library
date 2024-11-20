import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DatacommChatbotIcon } from "./datacomm-chatbot-icon";

// Mock the `next/image` component
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, width, height }: any) => (
    <img src={src} alt={alt} width={width} height={height} />
  ),
}));

describe("DatacommChatbotIcon", () => {
  it("renders the Avatar component with correct image src and alt attributes", () => {
    const iconUrl = "https://example.com/icon.png";

    // Render the component with the icon prop
    render(<DatacommChatbotIcon icon={iconUrl} />);

    // Find the Avatar element by test id
    const avatarElement = screen.getByTestId("bot-avatar");

    // Check if Avatar element is present in the document
    expect(avatarElement).toBeInTheDocument();
  });

  it("applies the correct styles to the Avatar wrapper", () => {
    const iconUrl = "https://example.com/icon.png";

    // Render the component with the icon prop
    render(<DatacommChatbotIcon icon={iconUrl} />);

    // Find the Avatar wrapper element by test id
    const avatarElement = screen.getByTestId("bot-avatar");

    // Assert that the Avatar has the correct class (for width, height, rounding)
    expect(avatarElement).toHaveClass("w-[30px] h-[30px] rounded-full");
  });
});
