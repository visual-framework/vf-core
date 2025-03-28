import { render } from "@testing-library/react";
// eslint-disable-next-line no-unused-vars
import { VfCard } from "./vf-card.react";
import { vfNunjucksEnv } from "@visual-framework/vf-extensions-react/vf-extensions-react.js";

jest.mock(
  "@visual-framework/vf-extensions-react/vf-extensions-react.js",
  () => ({
    vfNunjucksEnv: {
      render: jest.fn()
    }
  })
);

describe("VfCard", () => {
  const mockProps = {
    variant: "primary",
    newTheme: "dark",
    card_image: "image.jpg",
    card_text: "This is a card",
    card_image__alt: "Image description",
    card_title: "Card Title"
  };

  beforeEach(() => {
    vfNunjucksEnv.render.mockClear();
  });

  it("renders without crashing", () => {
    render(<VfCard {...mockProps} />);
  });

  it("calls vfNunjucksEnv.render with correct template and props", () => {
    render(<VfCard {...mockProps} />);
    expect(vfNunjucksEnv.render).toHaveBeenCalledWith("vf-card", mockProps);
  });

  it("renders the HTML returned by vfNunjucksEnv.render", () => {
    const mockHtml = "<div>Mock HTML</div>";
    vfNunjucksEnv.render.mockReturnValue(mockHtml);

    const { container } = render(<VfCard {...mockProps} />);
    expect(container.innerHTML).toContain(mockHtml);
  });
});
