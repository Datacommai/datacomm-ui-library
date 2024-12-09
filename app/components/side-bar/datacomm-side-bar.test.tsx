import { render, screen, fireEvent } from "@testing-library/react";
import { DatacommSideBar } from "./datacomm-side-bar";
import "@testing-library/jest-dom";

// Mocking components
jest.mock("../notification/datacomm-notification", () => ({
  DatacommNotification: ({ counter }: { counter: number }) => (
    <div data-testid="notification">{counter}</div>
  ),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} data-testid="next-image" />
  ),
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} data-testid="next-link">
      {children}
    </a>
  ),
}));

describe("DatacommSideBar", () => {
  const logo = "/assets/logo.svg";
  const topItems = [
    {
      title: "Conversations",
      url: "#",
      leftIcon: "/assets/icons/conversation-icon.svg",
      notificationCount: 7,
      onClick: jest.fn(),
    },
  ];
  const bottomItems = [
    {
      title: "Settings",
      url: "#",
      leftIcon: "/assets/icons/setting-icon.svg",
      onClick: jest.fn(),
    },
  ];

  test("renders the sidebar with logo and menu items", () => {
    render(
      <DatacommSideBar
        logo={logo}
        topItems={topItems}
        bottomItems={bottomItems}
      />
    );

    expect(screen.getByTestId("logo")).toHaveAttribute("src", logo);
    topItems.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByTestId("next-image")).toHaveAttribute(
        "src",
        item.leftIcon
      );
      if (item.notificationCount) {
        expect(screen.getByTestId("notification")).toHaveTextContent(
          item.notificationCount.toString()
        );
      }
    });
  });

  test("handles menu item clicks", () => {
    render(
      <DatacommSideBar
        logo={logo}
        topItems={topItems}
        bottomItems={bottomItems}
      />
    );

    const menuItem = screen.getByText(topItems[0].title);
    fireEvent.click(menuItem);
    expect(topItems[0].onClick).toHaveBeenCalled();
  });
});
