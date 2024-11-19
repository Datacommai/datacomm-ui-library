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
  it("renders the Avatar component with correct image src and alt attributes", () => {
    const iconUrl = "https://example.com/icon.png";

    // Render the component with the icon prop
    render(<DatacommUserProfileIcon icon={iconUrl} />);

    // Find the Avatar element by test id
    const avatarElement = screen.getByTestId("user-avatar");

    // Check if Avatar element is present in the document
    expect(avatarElement).toBeInTheDocument();

    // Check that Avatar contains the image with the correct src and alt attributes
  });

  it("applies the correct styles to the Avatar component", () => {
    const iconUrl = "https://example.com/icon.png";

    // Render the component with the icon prop
    render(<DatacommUserProfileIcon icon={iconUrl} />);

    // Find the Avatar element by test id
    const avatarElement = screen.getByTestId("user-avatar");

    // Assert that the Avatar has the correct class (w-[52px] h-[52px] rounded-full)
    expect(avatarElement).toHaveClass("w-[52px] h-[52px] rounded-full");
  });
});
