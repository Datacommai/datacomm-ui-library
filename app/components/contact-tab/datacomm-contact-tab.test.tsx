import { render, screen, fireEvent } from "@testing-library/react";
import { DatacommContactTab } from "./datacomm-contact-tab";
import { DatacommUserProfileIcon } from "../user-profile-icon/datacomm-user-profile-icon";
import { DatacommNotification } from "../notification/datacomm-notification";
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
  };

  test("renders correctly", () => {
    render(<DatacommContactTab {...defaultProps} />);

    // Check if profile icon, username, message, and notification are rendered
    expect(screen.getByTestId("profile-icon")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Hello, this is a message")).toBeInTheDocument();
    expect(screen.getByTestId("notification")).toHaveTextContent("3");
  });

  test("toggles active state on click", () => {
    const { container } = render(<DatacommContactTab {...defaultProps} />);

    // Initially check if the tab is not active
    const messageElement = screen.getByText("Hello, this is a message");
    expect(messageElement).toHaveClass("font-semibold"); // Inactive state (font-semibold)
    expect(screen.getByTestId("notification")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("bg-white");

    // Simulate a click to activate the tab
    fireEvent.click(container.firstChild as Node);

    // After click, check if the tab becomes active
    expect(messageElement).toHaveClass("font-normal"); // Active state (font-normal)
    expect(screen.queryByTestId("notification")).not.toBeInTheDocument(); // Notification should be removed
    expect(container.firstChild).toHaveClass("bg-[#D3F4EF]"); // Active background color
  });
});
