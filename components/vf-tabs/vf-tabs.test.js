// VfTabs.test.js
import { render, screen } from "@testing-library/react";
// eslint-disable-next-line no-unused-vars
import VfTabs from "./vf-tabs.react";

describe("VfTabs Component", () => {
  const tabsData = {
    tab1: [
      { tab_title: "Tab 1" },
      { tab_number: 1 },
      { tab_heading: "Heading 1" },
      { tab_content: "Content for Tab 1" }
    ],
    tab2: [
      { tab_title: "Tab 2" },
      { tab_number: 2 },
      { tab_heading: "Heading 2" },
      { tab_content: "Content for Tab 2" }
    ]
  };

  it("renders tabs correctly", () => {
    render(<VfTabs {...tabsData} />);

    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
  });

  it("renders the correct content for each tab", () => {
    render(<VfTabs {...tabsData} />);

    expect(screen.getByText("Content for Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Content for Tab 2")).toBeInTheDocument();
  });

  it("renders headings if provided", () => {
    render(<VfTabs {...tabsData} />);

    expect(screen.getByText("Heading 1")).toBeInTheDocument();
    expect(screen.getByText("Heading 2")).toBeInTheDocument();
  });

  it("does not render heading if it is an empty string", () => {
    const emptyHeadingTabsData = {
      tab1: [
        { tab_title: "Tab 1" },
        { tab_number: 1 },
        { tab_heading: "" },
        { tab_content: "Content for Tab 1" }
      ]
    };

    render(<VfTabs {...emptyHeadingTabsData} />);

    expect(screen.queryByText("Heading 1")).not.toBeInTheDocument();
  });
});
