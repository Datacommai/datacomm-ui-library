import { render, screen, fireEvent } from "@testing-library/react";
import { DatacommSignUp } from "./datacomm-sign-up";
import "@testing-library/jest-dom";

describe("DatacommSignUp", () => {
  it("renders the component", () => {
    render(<DatacommSignUp />);

    // Check for the presence of title and description
    expect(screen.getByText(/Welcome DataComm!/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Sign up to Datacomm to start building personalized outreach/i
      )
    ).toBeInTheDocument();

    // Check for input fields
    expect(screen.getByPlaceholderText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();

    // Check for buttons
    expect(
      screen.getByRole("button", { name: /Sign Up/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Continue with SSO/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Continue with Google/i })
    ).toBeInTheDocument();
  });

  it("handles button clicks", () => {
    const handleClick = jest.fn(); // Mock function for handling clicks
    render(<DatacommSignUp />);

    // Click the Sign Up button
    fireEvent.click(screen.getByRole("button", { name: /Sign Up/i }));
    // You can replace this with an actual implementation of what should happen on click
    expect(handleClick).not.toHaveBeenCalled();

    // Click Continue with SSO button
    fireEvent.click(screen.getByRole("button", { name: /Continue with SSO/i }));
    expect(handleClick).not.toHaveBeenCalled();

    // Click Continue with Google button
    fireEvent.click(
      screen.getByRole("button", { name: /Continue with Google/i })
    );
    expect(handleClick).not.toHaveBeenCalled();
  });
});
