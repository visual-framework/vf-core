import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// eslint-disable-next-line no-unused-vars
import VfBanner from "./vf-banner.react";

describe("VfBanner Component", () => {
  test("renders basic banner with message", () => {
    render(<VfBanner banner__message="This is a basic banner" />);
    expect(screen.getByText("This is a basic banner")).toBeInTheDocument();
  });

  test("renders dismissible basic banner", () => {
    render(
      <VfBanner
        banner__message="This is a dismissible banner"
        banner__dismissible={true}
      />
    );
    expect(
      screen.getByLabelText("close notification banner")
    ).toBeInTheDocument();
  });

  test("renders inline banner with link", () => {
    render(
      <VfBanner
        banner__type="inline"
        banner__inline_href="http://example.com"
      />
    );
    const element = screen.getByText("Complete our quick survey");
    expect(element).toBeInTheDocument();

    // Use the `getByRole` method to find the link by role and href attribute
    const link = screen.getByRole("link", {
      name: /complete our quick survey/i
    });
    expect(link).toHaveAttribute("href", "http://example.com");
  });

  test("renders fixed banner with privacy notice", () => {
    render(<VfBanner banner__type="fixed" />);
    expect(screen.getByText("Privacy Notice")).toBeInTheDocument();
    expect(screen.getByText("Terms Of Use")).toBeInTheDocument();
  });

  test("renders top banner with survey link", () => {
    render(
      <VfBanner banner__type="top" banner__inline_href="http://example.com" />
    );
    const element = screen.getByText("Complete our quick survey");
    expect(element).toBeInTheDocument();

    // Use the `getByRole` method to find the link by role and href attribute
    const link = screen.getByRole("link", {
      name: /complete our quick survey/i
    });
    expect(link).toHaveAttribute("href", "http://example.com");
  });

  test("applies correct variant class for info banner", () => {
    render(<VfBanner banner__variant="banner__info" />);
    expect(screen.getByRole("alert")).toHaveClass("vf-banner--info");
  });

  test("applies correct variant class for warning banner", () => {
    render(<VfBanner banner__variant="banner__warning" />);
    expect(screen.getByRole("alert")).toHaveClass("vf-banner--warning");
  });

  test("applies correct variant class for danger banner", () => {
    render(<VfBanner banner__variant="banner__danger" />);
    expect(screen.getByRole("alert")).toHaveClass("vf-banner--danger");
  });

  test("applies correct variant class for success banner", () => {
    render(<VfBanner banner__variant="banner__success" />);
    expect(screen.getByRole("alert")).toHaveClass("vf-banner--success");
  });
});
