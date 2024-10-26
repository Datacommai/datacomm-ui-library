import { render, screen } from "@testing-library/react";
import { DatacommLink, LinkTypes } from "./datacomm-links";
import "@testing-library/jest-dom";

describe("DatacommLink Component", () => {
  it("renders correctly", () => {
    render(
      <DatacommLink type={LinkTypes.STANDARD} title="Test Link" url="#" />
    );

    const link = screen.getByText("Test Link");
    expect(link).toBeInTheDocument();

    // Check the href attribute directly on the link element
    expect(link.closest("a")).toHaveAttribute("href", "#");
  });

  it("renders different types of links", () => {
    const { rerender } = render(
      <DatacommLink type={LinkTypes.STANDARD} title="Standard Link" url="#" />
    );

    const standardLink = screen.getByText("Standard Link");
    expect(standardLink).toHaveClass("text-[#6AB9BE] text-sm");

    rerender(
      <DatacommLink type={LinkTypes.SMALL} title="Small Link" url="#" />
    );
    const smallLink = screen.getByText("Small Link");
    expect(smallLink).toHaveClass("text-[#6AB9BE] text-xs");

    rerender(
      <DatacommLink
        type={LinkTypes.UNDERLINED}
        title="Underlined Link"
        url="#"
      />
    );
    const underlinedLink = screen.getByText("Underlined Link");
    expect(underlinedLink).toHaveClass("text-[#20caad] text-xs underline");
  });
});
