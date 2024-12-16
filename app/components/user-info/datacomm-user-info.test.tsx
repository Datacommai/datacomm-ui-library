import React from "react";
import { render, screen } from "@testing-library/react";
import { DatacommUserInfo } from "./datacomm-user-info"; // Adjust import path as needed
import "@testing-library/jest-dom";

// Mock child components to isolate testing
jest.mock("@/components/ui/tabs", () => ({
  Tabs: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="tabs">{children}</div>
  ),
  TabsContent: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  TabsList: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  TabsTrigger: ({
    children,
    value,
  }: {
    children: React.ReactNode;
    value: string;
  }) => <div data-testid={`tab-trigger-${value}`}>{children}</div>,
}));

jest.mock("@/components/ui/separator", () => ({
  Separator: () => <div data-testid="separator" />,
}));

jest.mock("@/components/ui/avatar", () => ({
  Avatar: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="user-avatar">{children}</div>
  ),
  AvatarImage: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} data-testid="user-avatar-image" />
  ),
  AvatarFallback: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

jest.mock("../contact-buttons/datacomm-contact-buttons", () => ({
  DatacommContactButton: ({
    type,
    contactInfo,
  }: {
    type: string;
    contactInfo: string;
  }) => (
    <button data-testid={`contact-${type.toLowerCase()}`}>{contactInfo}</button>
  ),
}));

describe("DatacommUserInfo", () => {
  const mockProps = {
    profileIcon: "https://example.com/avatar.jpg",
    fullname: "John Doe",
    money: 1000,
    tabs: [
      { name: "Tab 1", id: "tab1" },
      { name: "Tab 2", id: "tab2" },
    ],
  };

  beforeEach(() => {
    render(<DatacommUserInfo {...mockProps} />);
  });

  test("renders user avatar", () => {
    const avatar = screen.getByTestId("user-avatar");
    const avatarImage = screen.getByTestId("user-avatar-image");

    expect(avatar).toBeInTheDocument();
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute("src", mockProps.profileIcon);
    expect(avatarImage).toHaveAttribute("alt", "user icon");
  });

  test("renders user full name", () => {
    const fullNameElement = screen.getByText(mockProps.fullname);
    expect(fullNameElement).toBeInTheDocument();
    expect(fullNameElement).toHaveClass(
      "text-lg font-extrabold text-[#1D1F2C]"
    );
  });

  test("renders user money", () => {
    const moneyElement = screen.getByText(`$${mockProps.money}`);
    expect(moneyElement).toBeInTheDocument();
    expect(moneyElement).toHaveClass("font-bold text-[#777980] text-xs");
  });

  test("renders contact buttons", () => {
    const phoneButton = screen.getByTestId("contact-phone");
    const emailButton = screen.getByTestId("contact-email");
    const whatsappButton = screen.getByTestId("contact-whatsapp");

    expect(phoneButton).toBeInTheDocument();
    expect(emailButton).toBeInTheDocument();
    expect(whatsappButton).toBeInTheDocument();
  });

  test("renders tabs", () => {
    const tabs = screen.getByTestId("tabs");
    expect(tabs).toBeInTheDocument();

    mockProps.tabs.forEach((tab) => {
      const tabTrigger = screen.getByTestId(`tab-trigger-${tab.id}`);
      expect(tabTrigger).toBeInTheDocument();
      expect(tabTrigger).toHaveTextContent(tab.name);
    });
  });

  test("renders separator", () => {
    const separator = screen.getByTestId("separator");
    expect(separator).toBeInTheDocument();
  });
});
