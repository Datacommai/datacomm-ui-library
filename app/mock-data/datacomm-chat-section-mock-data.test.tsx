import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DatacommChatSectionMockData from "./datacomm-chat-section-mock-data";

type MockData = {
  id: number;
  username: string;
  message: string;
  notificationCount: number;
  profileIcon: string;
};

const mockData: MockData[] = [
  {
    id: 1,
    username: "John Doe",
    message: "Hello, this is a message",
    notificationCount: 3,
    profileIcon: "/assets/icons/user-profile-icon.svg",
  },
  {
    id: 2,
    username: "Jane Smith",
    message: "Can we schedule a meeting?",
    notificationCount: 1,
    profileIcon: "/assets/images/user-profile-icon-2.svg",
  },
  {
    id: 3,
    username: "Chris Johnson",
    message: "I sent you the documents.",
    notificationCount: 0,
    profileIcon: "/assets/images/user-profile-icon-3.svg",
  },
  // Add other mock data objects here...
];

describe("DatacommChatSectionMockData", () => {
  test("renders the input field with the search icon", () => {
    render(<DatacommChatSectionMockData />);

    // Check if the input field is rendered with the placeholder text
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();

    // Check if the search icon is rendered
    expect(screen.getByAltText("Search icon")).toBeInTheDocument();
  });

  test("renders the contact list items", () => {
    render(<DatacommChatSectionMockData />);

    // Check that the mock data renders contact tab components
    mockData.forEach((contact: MockData) => {
      expect(screen.getByText(contact.username)).toBeInTheDocument();
      expect(screen.getByText(contact.message)).toBeInTheDocument();
    });
  });

  test("renders the DatacommAddConversation component", () => {
    render(<DatacommChatSectionMockData />);

    // Check if the title of the DatacommAddConversation component is rendered
    expect(screen.getByText("Conversation")).toBeInTheDocument();
  });
});
