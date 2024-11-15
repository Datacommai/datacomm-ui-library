// DatacommChatbotIcon.test.tsx

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
  it("renders the image with correct src and alt attributes", () => {
    const iconUrl = "https://example.com/icon.png";

    // Render the component with the icon prop
    render(<DatacommChatbotIcon icon={iconUrl} />);

    // Find the image element
    const imageElement = screen.getByAltText("logo");

    // Assert the image src and alt attributes are correct
    expect(imageElement).toHaveAttribute("src", iconUrl);
    expect(imageElement).toHaveAttribute("alt", "logo");
  });

  it("applies the correct styles to the figure", () => {
    const iconUrl = "https://example.com/icon.png";

    // Render the component with the icon prop
    render(<DatacommChatbotIcon icon={iconUrl} />);

    // Find the figure element
    const figureElement = screen.getByRole("figure");

    // Assert that the figure has the correct class (chatbotIconstyles)
    expect(figureElement).toHaveClass("w-[30px] h-[30px] rounded-full");
  });
});
