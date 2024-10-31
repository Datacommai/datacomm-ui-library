import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DatacommInput, InputTypes } from "./datacomm-input";

describe("DatacommInput Component", () => {
  const mockOnChange = jest.fn();
  const value = "";

  it("renders correctly with FULLNAME type", () => {
    render(
      <DatacommInput
        type={InputTypes.FULLNAME}
        value={value}
        onChange={mockOnChange}
        className=""
      />
    );
    const input = screen.getByPlaceholderText("Full Name");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });

  it("renders correctly with EMAIL type", () => {
    render(
      <DatacommInput
        type={InputTypes.EMAIL}
        value={value}
        onChange={mockOnChange}
        className=""
      />
    );
    const input = screen.getByPlaceholderText("Email address");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "email");
  });

  it("renders correctly with PASSWORD type", () => {
    render(
      <DatacommInput
        type={InputTypes.PASSWORD}
        value={value}
        onChange={mockOnChange}
        className=""
      />
    );
    const input = screen.getByPlaceholderText("Password");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "password");
  });

  it("calls onChange when the input value changes", () => {
    render(
      <DatacommInput
        type={InputTypes.FULLNAME}
        value={value}
        onChange={mockOnChange}
        className=""
      />
    );
    const input = screen.getByPlaceholderText("Full Name");

    fireEvent.input(input, { target: { value: "John Doe" } });
    expect(mockOnChange).toHaveBeenCalled();
  });

  it("renders a user icon when type is FULLNAME", () => {
    render(
      <DatacommInput
        type={InputTypes.FULLNAME}
        value={value}
        onChange={mockOnChange}
        className=""
      />
    );
    const icon = screen.getByAltText("User");
    expect(icon).toBeInTheDocument();
  });

  it("renders an email icon when type is EMAIL", () => {
    render(
      <DatacommInput
        type={InputTypes.EMAIL}
        value={value}
        onChange={mockOnChange}
        className=""
      />
    );
    const icon = screen.getByAltText("Email");
    expect(icon).toBeInTheDocument();
  });

  it("renders a lock icon when type is PASSWORD", () => {
    render(
      <DatacommInput
        type={InputTypes.PASSWORD}
        value={value}
        onChange={mockOnChange}
        className=""
      />
    );
    const icon = screen.getByAltText("Lock");
    expect(icon).toBeInTheDocument();
  });

  it("toggles password visibility when eye icon is clicked", () => {
    render(
      <DatacommInput
        type={InputTypes.PASSWORD}
        value={value}
        onChange={mockOnChange}
        className=""
      />
    );
    const input = screen.getByPlaceholderText("Password");
    const eyeIcon = screen.getByAltText("Toggle Password Visibility");

    // Initially, the input type should be 'password'
    expect(input).toHaveAttribute("type", "password");

    // Click the eye icon to show the password
    fireEvent.click(eyeIcon);
    expect(input).toHaveAttribute("type", "text");

    // Click the eye icon again to hide the password
    fireEvent.click(eyeIcon);
    expect(input).toHaveAttribute("type", "password");
  });
});
