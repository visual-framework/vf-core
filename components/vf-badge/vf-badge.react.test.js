import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// eslint-disable-next-line no-unused-vars
import VfBadge from "./vf-badge.react";

describe("VfBadge Component", () => {
  test("renders a span when badge_href is not provided", () => {
    render(<VfBadge text="Test Badge" />);
    const spanElement = screen.getByRole("status");
    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toHaveTextContent("Test Badge");
  });

  test("renders an anchor when badge_href is provided", () => {
    render(<VfBadge badge_href="http://example.com" text="Test Badge" />);
    const anchorElement = screen.getByRole("link");
    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement).toHaveAttribute("href", "http://example.com");
    expect(anchorElement).toHaveTextContent("Test Badge");
  });

  test("applies theme class when theme is provided", () => {
    render(<VfBadge theme="primary" text="Test Badge" />);
    const spanElement = screen.getByRole("status");
    expect(spanElement).toHaveClass("vf-badge--primary");
  });

  test("applies multiple style classes when style is provided", () => {
    render(<VfBadge style="large,rounded" text="Test Badge" />);
    const spanElement = screen.getByRole("status");
    expect(spanElement).toHaveClass("vf-badge--large");
    expect(spanElement).toHaveClass("vf-badge--rounded");
  });

  test("applies override_class when provided", () => {
    render(<VfBadge override_class="custom-class" text="Test Badge" />);
    const spanElement = screen.getByRole("status");
    expect(spanElement).toHaveClass("custom-class");
  });

  test("applies id attribute when id is provided", () => {
    render(<VfBadge id="badge-id" text="Test Badge" />);
    const spanElement = screen.getByRole("status");
    expect(spanElement).toHaveAttribute("id", "badge-id");
  });
});
