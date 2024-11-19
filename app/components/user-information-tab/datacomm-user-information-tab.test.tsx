import { render, screen } from "@testing-library/react";
import { DatacommUserInformation } from "./datacomm-user-information-tab";
import "@testing-library/jest-dom";

describe("DatacommUserInformation", () => {
  const username = "john_doe";
  const purchasedItemsCount = 5;
  const lifetimeValue = 123.45;
  const userAvatar = "/assets/images/user-avatar.svg"; // example URL for the avatar

  beforeEach(() => {
    render(
      <DatacommUserInformation
        username={username}
        purchasedItemsCount={purchasedItemsCount}
        lifetimeValue={lifetimeValue}
        userAvatar={userAvatar} // pass the dynamic user avatar
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

    // Check if the Avatar component exists
    const avatar = screen.getByTestId("user-avatar");
    expect(avatar).toBeInTheDocument();
  });
});
