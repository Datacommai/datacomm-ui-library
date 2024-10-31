import { render, screen } from "@testing-library/react";
import { DatacommNotification } from "./datacomm-notification";
import "@testing-library/jest-dom";

describe("DatacommNotification", () => {
  it("renders the notification counter", () => {
    render(<DatacommNotification counter={5} />);

    expect(screen.getByText(/5/i)).toBeInTheDocument();
  });

  it("updates the notification counter", () => {
    const { rerender } = render(<DatacommNotification counter={0} />);

    expect(screen.getByText(/0/i)).toBeInTheDocument();

    rerender(<DatacommNotification counter={10} />);

    expect(screen.getByText(/10/i)).toBeInTheDocument();
  });
});
