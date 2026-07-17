import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// eslint-disable-next-line no-unused-vars
import VfHero from "./vf-hero.react";

describe("VfHero", () => {
  test("renders with default props", () => {
    render(<VfHero />);
    expect(screen.getByRole("banner")).toHaveClass("vf-hero vf-u-fullbleed");
  });

  test("renders with custom id", () => {
    render(<VfHero id="custom-id" />);
    expect(screen.getByRole("banner")).toHaveAttribute("id", "custom-id");
  });

  test("renders with custom modifier class", () => {
    render(<VfHero modifier_class="custom-class" />);
    expect(screen.getByRole("banner")).toHaveClass("custom-class");
  });

  test("renders with custom image and size", () => {
    render(<VfHero vf_hero_image="image.jpg" vf_hero_image_size="cover" />);
    expect(screen.getByRole("banner")).toHaveStyle({
      "--vf-hero--bg-image": "image.jpg",
      "--vf-hero--bg-image-size": "cover"
    });
  });

  test("renders responsive hero media with high-priority image attrs", () => {
    render(
      <VfHero
        vf_hero_image_mobile_src="/hero-mobile-360x200.jpg"
        vf_hero_image_src="/hero-desktop-1920x1080.jpg"
        vf_hero_image_large_src="/hero-large-2560x1440.jpg"
        vf_hero_image_sizes="(max-width: 767px) 100vw, 1920px"
      />
    );

    const banner = screen.getByRole("banner");
    expect(banner).toHaveClass("vf-hero--has-media");

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/hero-desktop-1920x1080.jpg");
    expect(img).toHaveAttribute("fetchpriority", "high");
    expect(img).toHaveAttribute("loading", "eager");
    expect(img).toHaveAttribute("width", "1920");
    expect(img).toHaveAttribute("height", "1080");
    expect(img).toHaveAttribute("sizes", "(max-width: 767px) 100vw, 1920px");
  });

  test("renders with heading and link", () => {
    render(
      <VfHero
        vf_hero_heading="Hero Heading"
        vf_hero_heading_href="https://example.com"
      />
    );
    const headingLink = screen.getByRole("link", { name: "Hero Heading" });
    expect(headingLink).toHaveAttribute("href", "https://example.com");
  });

  test("renders with subheading", () => {
    render(<VfHero vf_hero_subheading="Subheading" />);
    expect(screen.getByText("Subheading")).toHaveClass("vf-hero__subheading");
  });

  test("renders with text", () => {
    render(<VfHero vf_hero_text={["Text 1", "Text 2"]} />);
    expect(screen.getByText("Text 1")).toHaveClass("vf-hero__text");
    expect(screen.getByText("Text 2")).toHaveClass("vf-hero__text");
  });

  test("renders with link", () => {
    render(
      <VfHero
        vf_hero_link_text="Link Text"
        vf_hero_link_href="https://example.com"
      />
    );
    const link = screen.getByRole("link", { name: "Link Text" });
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  test("renders with additional heading", () => {
    render(<VfHero vf_hero_heading_additional="Additional Heading" />);
    expect(screen.getByText("Additional Heading")).toHaveClass(
      "vf-hero__kicker"
    );
  });

  test("renders with kicker", () => {
    render(<VfHero vf_hero_kicker="Kicker Text" />);
    expect(screen.getByText("Kicker Text")).toHaveClass("vf-hero__kicker");
  });
});
