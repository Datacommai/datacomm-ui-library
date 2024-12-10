import { render, screen } from "@testing-library/react";
import { DatacommContactTab } from "./datacomm-contact-tab";
import "@testing-library/jest-dom"; // For the "toBeInTheDocument" matcher

// Mocking the DatacommUserProfileIcon and DatacommNotification components to isolate the test
jest.mock("../user-profile-icon/datacomm-user-profile-icon", () => ({
  DatacommUserProfileIcon: () => <div data-testid="profile-icon" />,
}));

jest.mock("../notification/datacomm-notification", () => ({
  DatacommNotification: ({ counter }: { counter: number }) => (
    <div data-testid="notification">{counter}</div>
  ),
}));

describe("DatacommContactTab", () => {
  const defaultProps = {
    username: "John Doe",
    message: "Hello, this is a message",
    notificationCount: 3,
    profileIcon: "profile-icon-url",
    isSelected: false,
  };

  test("renders correctly when not selected", () => {
    render(<DatacommContactTab {...defaultProps} />);

    // Check if profile icon, username, message, and notification are rendered
    expect(screen.getByTestId("profile-icon")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Hello, this is a message")).toBeInTheDocument();
    expect(screen.getByTestId("notification")).toHaveTextContent("3");

    // Check for inactive styles
    expect(screen.getByText("Hello, this is a message")).toHaveClass(
      "font-semibold"
    );
    expect(screen.getByText("15 min")).toHaveClass("font-semibold");
    expect(screen.getByRole("section")).toHaveClass("bg-white");
  });

  test("renders correctly when selected", () => {
    render(<DatacommContactTab {...defaultProps} isSelected={true} />);

    // Check if profile icon, username, message, and notification are rendered
    expect(screen.getByTestId("profile-icon")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Hello, this is a message")).toBeInTheDocument();

    // Check for active styles
    expect(screen.getByText("Hello, this is a message")).toHaveClass(
      "font-normal"
    );
    expect(screen.getByText("15 min")).toHaveClass("font-normal");
    expect(screen.getByRole("section")).toHaveClass("bg-[#D3F4EF]");

    // Notification should not be present
    expect(screen.queryByTestId("notification")).not.toBeInTheDocument();
  });
});
