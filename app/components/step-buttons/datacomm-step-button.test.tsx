import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // For the 'toBeInTheDocument' matcher
import { StepButton, StepButtonTypes } from "./datacomm-step-button";

// Define the type for the click handler
type HandleClick = (step: number) => void;

describe("StepButton Component", () => {
  let handleClick: jest.Mock<HandleClick>;

  beforeEach(() => {
    handleClick = jest.fn();
  });

  it("renders correctly with the forward icon and correct styles", () => {
    render(<StepButton type={StepButtonTypes.FORWARD} onClick={handleClick} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(screen.getByAltText("Forward")).toBeInTheDocument();
    expect(button).toHaveClass(
      "w-fit h-fit bg-transparent border-none p-0 rounded-full"
    );
  });

  it("renders correctly with the back icon and correct styles", () => {
    render(<StepButton type={StepButtonTypes.BACK} onClick={handleClick} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(screen.getByAltText("Back")).toBeInTheDocument();
    expect(button).toHaveClass(
      "w-fit h-fit bg-transparent border-none p-0 rounded-full"
    );
  });

  it("calls onClick with -1 when clicking back", () => {
    render(<StepButton type={StepButtonTypes.BACK} onClick={handleClick} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledWith(-1);
  });

  it("calls onClick with 1 when clicking forward", () => {
    render(<StepButton type={StepButtonTypes.FORWARD} onClick={handleClick} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledWith(1);
  });

  it("does not increment or decrement step beyond limits", () => {
    // Start with the BACK button
    const { rerender } = render(
      <StepButton type={StepButtonTypes.BACK} onClick={handleClick} />
    );

    const button = screen.getByRole("button");

    // Click to set step to -1
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledWith(-1);

    // Click again, should not call onClick again
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1); // Should still be 1 call

    // Switch to FORWARD button and render it
    rerender(
      <StepButton type={StepButtonTypes.FORWARD} onClick={handleClick} />
    );

    // Click to set step to 1
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledWith(1);

    // Click again, should not call onClick again
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(2); // Should still be 2 calls
  });
});
