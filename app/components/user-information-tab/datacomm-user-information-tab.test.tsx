import { render, screen } from "@testing-library/react";
import { DatacommUserInformation } from "./datacomm-user-information-tab";
import "@testing-library/jest-dom"; // for the 'toBeInTheDocument' matcher

describe("DatacommUserInformation", () => {
  const username = "john_doe";
  const purchasedItemsCount = 5;
  const lifetimeValue = 123.45;

  beforeEach(() => {
    render(
      <DatacommUserInformation
        username={username}
        purchasedItemsCount={purchasedItemsCount}
        lifetimeValue={lifetimeValue}
      />
    );
  });

  it("renders the user information correctly", () => {
    // Check if the username is rendered
    expect(screen.getByText(username)).toBeInTheDocument();

    // Check if the purchased items count is rendered
    expect(
      screen.getByText(`${purchasedItemsCount} items`)
    ).toBeInTheDocument();

    // Check if the lifetime value is rendered
    expect(screen.getByText(`$${lifetimeValue}`)).toBeInTheDocument();

    // Check if the image has the correct alt and src attributes
    const userImage = screen.getByAltText("User Icon");
    expect(userImage).toHaveAttribute("src", "/assets/icons/user-icon.svg");
  });
});
