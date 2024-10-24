import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { StepBar, StepBarTypes } from "./datacomm-step-bar";

describe("StepBar Component", () => {
  it("renders the active icon when type is ACTIVE and isActive is true", () => {
    render(<StepBar type={StepBarTypes.ACTIVE} isActive={true} />);
    const icon = screen.getByAltText("Active User");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", "/assets/icons/active-bar-icon.svg");
  });

  it("renders the inactive icon when type is ACTIVE and isActive is false", () => {
    render(<StepBar type={StepBarTypes.ACTIVE} isActive={false} />);
    const icon = screen.getByAltText("Inactive User");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", "/assets/icons/inactive-bar-icon.svg");
  });

  it("renders the inactive icon when type is INACTIVE and isActive is false", () => {
    render(<StepBar type={StepBarTypes.INACTIVE} isActive={false} />);
    const icon = screen.getByAltText("Inactive User");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", "/assets/icons/inactive-bar-icon.svg");
  });

  it("renders the inactive icon when type is INACTIVE and isActive is true", () => {
    render(<StepBar type={StepBarTypes.INACTIVE} isActive={true} />);
    const icon = screen.getByAltText("Inactive User");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", "/assets/icons/inactive-bar-icon.svg");
  });
});
