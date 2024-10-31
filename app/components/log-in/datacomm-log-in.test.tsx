import { render, screen, fireEvent } from "@testing-library/react";
import { DatacommLogIn } from "./datacomm-log-in";
import "@testing-library/jest-dom";

describe("DatacommLogIn", () => {
  const mockOnLogIn = jest.fn();
  const mockOnContinueSSO = jest.fn();
  const mockOnContinueGoogle = jest.fn();

  beforeEach(() => {
    render(
      <DatacommLogIn
        title="Log In"
        description="Please log in to your account."
        logo="/assets/images/mock-logo.svg"
        onLogIn={mockOnLogIn}
        onContinueSSO={mockOnContinueSSO}
        onContinueGoogle={mockOnContinueGoogle}
        width="497px"
        height="fit-content"
      />
    );
  });

  it("renders the component", () => {
    // Check for the presence of title and description
    expect(
      screen.getByRole("heading", { name: /log in/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/please log in to your account/i)
    ).toBeInTheDocument();

    // Check for input fields
    expect(screen.getByPlaceholderText(/email address/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();

    // Check for buttons
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /continue with sso/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /continue with google/i })
    ).toBeInTheDocument();
  });

  it("handles button clicks", () => {
    // Fill in the required fields
    fireEvent.change(screen.getByPlaceholderText(/email address/i), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "password123" },
    });

    // Click the Login button
    fireEvent.click(screen.getByRole("button", { name: /login/i }));
    expect(mockOnLogIn).toHaveBeenCalled();

    // Click Continue with SSO button
    fireEvent.click(screen.getByRole("button", { name: /continue with sso/i }));
    expect(mockOnContinueSSO).toHaveBeenCalled();

    // Click Continue with Google button
    fireEvent.click(
      screen.getByRole("button", { name: /continue with google/i })
    );
    expect(mockOnContinueGoogle).toHaveBeenCalled();
  });
});
