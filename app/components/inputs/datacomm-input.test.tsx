import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // For the 'toBeInTheDocument' matcher
import { DatacommInput, InputTypes, InputIconTypes } from "./datacomm-input";

describe("DatacommInput Component", () => {
  it("renders correctly with a placeholder", () => {
    const { getByPlaceholderText } = render(
      <DatacommInput
        type={InputTypes.FULLNAME}
        iconType={InputIconTypes.NONE}
        placeholder="Full Name"
      />
    );
    const input = getByPlaceholderText("Full Name");
    expect(input).toBeInTheDocument();
  });

  it("renders the correct input type for EMAIL", () => {
    const { getByPlaceholderText } = render(
      <DatacommInput
        type={InputTypes.EMAIL}
        iconType={InputIconTypes.NONE}
        placeholder="Email address"
      />
    );
    const input = getByPlaceholderText("Email address");
    expect(input).toHaveAttribute("type", "email");
  });

  it("renders the correct input type for PASSWORD", () => {
    const { getByPlaceholderText } = render(
      <DatacommInput
        type={InputTypes.PASSWORD}
        iconType={InputIconTypes.NONE}
        placeholder="Password"
      />
    );
    const input = getByPlaceholderText("Password");
    expect(input).toHaveAttribute("type", "password");
  });

  it("calls onInput when the input value changes", () => {
    const handleInput = jest.fn();
    const { getByPlaceholderText } = render(
      <DatacommInput
        type={InputTypes.FULLNAME}
        iconType={InputIconTypes.NONE}
        placeholder="Full Name"
        onInput={handleInput}
      />
    );
    const input = getByPlaceholderText("Full Name");

    fireEvent.input(input, { target: { value: "John Doe" } });
    expect(handleInput).toHaveBeenCalled();
  });

  it("renders a user icon when iconType is USER", () => {
    const { getByAltText } = render(
      <DatacommInput
        type={InputTypes.FULLNAME}
        iconType={InputIconTypes.USER}
        placeholder="Full Name"
      />
    );
    const icon = getByAltText("User");
    expect(icon).toBeInTheDocument();
  });

  it("renders an email icon when iconType is EMAIL", () => {
    const { getByAltText } = render(
      <DatacommInput
        type={InputTypes.EMAIL}
        iconType={InputIconTypes.EMAIL}
        placeholder="Email address"
      />
    );
    const icon = getByAltText("Email");
    expect(icon).toBeInTheDocument();
  });

  it("renders a lock icon when iconType is LOCK", () => {
    const { getByAltText } = render(
      <DatacommInput
        type={InputTypes.PASSWORD}
        iconType={InputIconTypes.LOCK}
        placeholder="password"
      />
    );
    const icon = getByAltText("Lock");
    expect(icon).toBeInTheDocument();
  });
});
