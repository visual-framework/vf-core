import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// eslint-disable-next-line no-unused-vars
import VfBlockquote from "./vf-blockquote.react";

describe("VfBlockquote", () => {
  test("renders with default modifier", async () => {
    await render(<VfBlockquote blockquote_text="Test blockquote" />);
    expect(screen.getByRole("blockquote")).toBeInTheDocument();
  });

  test("renders with small modifier", async () => {
    await render(
      <VfBlockquote blockquote_text="Test blockquote" modifier="small" />
    );
    expect(screen.getByRole("blockquote")).toHaveClass("vf-blockquote-small");
  });

  test("renders with override class", async () => {
    await render(
      <VfBlockquote
        blockquote_text="Test blockquote"
        override_class="custom-class"
      />
    );
    expect(screen.getByRole("blockquote")).toHaveClass("custom-class");
  });

  test("renders blockquote author", async () => {
    await render(
      <VfBlockquote
        blockquote_text="Test blockquote"
        blockquote_author="Author Name"
      />
    );
    expect(screen.getByText("Author Name")).toBeInTheDocument();
  });

  test("renders blockquote author with href", async () => {
    await render(
      <VfBlockquote
        blockquote_text="Test blockquote"
        blockquote_author="Author Name"
        blockquote_author_href="https://example.com"
      />
    );
    const authorLink = screen.getByRole("link", { name: "Author Name" });
    expect(authorLink).toHaveAttribute("href", "https://example.com");
  });

  test("renders blockquote author details", async () => {
    await render(
      <VfBlockquote
        blockquote_text="Test blockquote"
        blockquote_author_details="Author Details"
      />
    );
    expect(screen.getByText("Author Details")).toBeInTheDocument();
  });

  test("renders blockquote author image", async () => {
    await render(
      <VfBlockquote
        blockquote_text="Test blockquote"
        blockquote_author_imageurl="https://example.com/image.jpg"
      />
    );
    const img = screen.getByAltText("");
    expect(img).toHaveAttribute("src", "https://example.com/image.jpg");
  });

  test("renders with id attribute", async () => {
    await render(
      <VfBlockquote blockquote_text="Test blockquote" id="test-id" />
    );
    expect(screen.getByRole("blockquote")).toHaveAttribute("id", "test-id");
  });

  test("renders with HTML content", async () => {
    await render(<VfBlockquote html="<p>HTML content</p>" />);
    expect(screen.getByText("HTML content")).toBeInTheDocument();
  });

  test("renders with text content", async () => {
    await render(<VfBlockquote text="Text content" />);
    expect(screen.getByText("Text content")).toBeInTheDocument();
  });
});
