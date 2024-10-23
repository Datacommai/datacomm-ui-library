import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // For the 'toBeInTheDocument' matcher
import { StepButton, StepButtonTypes } from "./datacomm-step-button";

describe("StepButton Component", () => {
  it("renders correctly with the forward icon and correct styles", () => {
    render(<StepButton type={StepButtonTypes.FORWARD} onClick={() => {}} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(screen.getByAltText("Forward")).toBeInTheDocument();
    expect(button).toHaveClass(
      "w-fit h-fit bg-black border-none p-0 rounded-full"
    );
  });

  it("renders correctly with the back icon and correct styles", () => {
    render(<StepButton type={StepButtonTypes.BACK} onClick={() => {}} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(screen.getByAltText("Back")).toBeInTheDocument();
    expect(button).toHaveClass(
      "w-fit h-fit bg-black border-none p-0 rounded-full"
    );
  });

  it("calls onClick with the correct step value when clicking back", () => {
    const handleClick = jest.fn();
    render(<StepButton type={StepButtonTypes.BACK} onClick={handleClick} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledWith(-1);
  });

  it("calls onClick with the correct step value when clicking forward", () => {
    const handleClick = jest.fn();
    render(<StepButton type={StepButtonTypes.FORWARD} onClick={handleClick} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledWith(1);
  });

  it("increments and decrements the step state correctly", () => {
    const handleClick = jest.fn();
    const { rerender } = render(
      <StepButton type={StepButtonTypes.FORWARD} onClick={handleClick} />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button); // Forward: step goes to 1
    rerender(
      <StepButton type={StepButtonTypes.FORWARD} onClick={handleClick} />
    );

    fireEvent.click(button); // Forward: step goes to 2
    expect(handleClick).toHaveBeenCalledWith(2);

    rerender(<StepButton type={StepButtonTypes.BACK} onClick={handleClick} />);
    fireEvent.click(button); // Back: step goes to 1
    expect(handleClick).toHaveBeenCalledWith(1);
  });
});
