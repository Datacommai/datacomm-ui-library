import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DatacommAccountPreview } from "@/app/components/account-perview/datacomm-account-perview";

describe("DatacommAccountPreview", () => {
  it("should render the user avatar, name, and job description", () => {
    const mockProps = {
      profileIcon: "/assets/icons/user-profile-icon.svg",
      fullname: "John Doe",
      jobDescription: "Software Engineer",
      dropdownItems: [
        {
          name: "Theme",
          id: "1",
          leftIcon: "/assets/icons/theme-icon.svg",
          rightElement: <div data-testid="theme-switch">Switch</div>,
        },
        {
          name: "Help & Support",
          id: "2",
          leftIcon: "/assets/icons/help-icon.svg",
          rightElement: null,
        },
        {
          name: "Settings",
          id: "3",
          leftIcon: "/assets/icons/setting-icon.svg",
          rightElement: null,
        },
      ],
    };

    render(<DatacommAccountPreview {...mockProps} />);

    // Check if the avatar image is rendered
    expect(screen.getByTestId("user-avatar-image")).toBeInTheDocument();

    // Check if the user's name is rendered
    expect(screen.getByText("John Doe")).toBeInTheDocument();

    // Check if the job description is rendered
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();

    // Check if the dropdown menu contains the "Theme" item
    expect(screen.getByText("Theme")).toBeInTheDocument();

    // Check if the dropdown menu contains the "Help & Support" item
    expect(screen.getByText("Help & Support")).toBeInTheDocument();

    // Check if the dropdown menu contains the "Settings" item
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });
});
