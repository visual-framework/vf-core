import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// eslint-disable-next-line no-unused-vars
import VfBackToTop from "./vf-back-to-top.react";

describe("VfBackToTop Component", () => {
  test("renders with default props", () => {
    render(<VfBackToTop />);
    const button = screen.getByRole("link", { name: /Back to top/i });
    expect(button).toBeInTheDocument();
    expect(button).not.toHaveAttribute("href");
  });

  test("renders with custom text", () => {
    render(<VfBackToTop text="Go up" />);
    const button = screen.getByRole("link", { name: /Go up/i });
    expect(button).toBeInTheDocument();
  });

  test("renders with custom href", () => {
    render(<VfBackToTop scrollToId="section1" />);
    const button = screen.getByRole("link", { name: /Back to top/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "#section1");
  });

  test("renders with custom type", () => {
    render(<VfBackToTop type="floating" />);
    const container = screen
      .getByRole("link", { name: /Back to top/i })
      .closest("div");
    expect(container).toHaveClass("vf-back-top--floating");
  });
});
