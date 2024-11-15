import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DatacommUserProfileIcon } from "./datacomm-user-profile-icon";

// Mock the `next/image` component
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, width, height }: any) => (
    <img src={src} alt={alt} width={width} height={height} />
  ),
}));

describe("DatacommUserProfileIcon", () => {
  it("renders the image with correct src and alt attributes", () => {
    const iconUrl = "https://example.com/icon.png";

    // Render the component with the icon prop
    render(<DatacommUserProfileIcon icon={iconUrl} />);

    // Find the image element
    const imageElement = screen.getByAltText("user icon");

    // Assert the image src and alt attributes are correct
    expect(imageElement).toHaveAttribute("src", iconUrl);
    expect(imageElement).toHaveAttribute("alt", "user icon");
  });

  it("applies the correct styles to the figure", () => {
    const iconUrl = "https://example.com/icon.png";

    // Render the component with the icon prop
    render(<DatacommUserProfileIcon icon={iconUrl} />);

    // Find the figure element
    const figureElement = screen.getByRole("figure");

    // Assert that the figure has the correct class (chatbotIconstyles)
    expect(figureElement).toHaveClass("w-[52px] h-[52px] rounded-full");
  });
});
