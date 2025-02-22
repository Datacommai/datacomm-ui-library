import { render, screen, fireEvent } from "@testing-library/react";
import { DatacommSignUp } from "./datacomm-sign-up";
import "@testing-library/jest-dom";

describe("DatacommSignUp", () => {
  const mockOnSignUp = jest.fn();
  const mockOnContinueSSO = jest.fn();
  const mockOnContinueGoogle = jest.fn();

  beforeEach(() => {
    render(
      <DatacommSignUp
        title="Welcome DataComm!"
        description="Sign up to Datacomm to start building personalized outreach."
        logo="/assets/images/mock-logo.svg"
        companyName="DataComm!"
        width="497px"
        height="fit-content"
        onSignUp={mockOnSignUp}
        onContinueSSO={mockOnContinueSSO}
        onContinueGoogle={mockOnContinueGoogle}
      />
    );
  });

  it("renders the component", () => {
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
    // Fill in the required fields
    fireEvent.change(screen.getByPlaceholderText(/Full Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Email address/i), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), {
      target: { value: "password123" },
    });

    // Click the Sign Up button
    fireEvent.click(screen.getByRole("button", { name: /Sign Up/i }));
    expect(mockOnSignUp).toHaveBeenCalled();

    // Click Continue with SSO button
    fireEvent.click(screen.getByRole("button", { name: /Continue with SSO/i }));
    expect(mockOnContinueSSO).toHaveBeenCalled();

    // Click Continue with Google button
    fireEvent.click(
      screen.getByRole("button", { name: /Continue with Google/i })
    );
    expect(mockOnContinueGoogle).toHaveBeenCalled();
  });
});
