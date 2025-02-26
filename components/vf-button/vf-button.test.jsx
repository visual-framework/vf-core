import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import VfButton from "./vf-button";

describe("VfButton component", () => {
    test("renders with default props", () => {
        render(<VfButton text="Click me" />);
        const buttonElement = screen.getByText("Click me");
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass("vf-button");
    });

    test("applies theme class", () => {
        render(<VfButton text="Click me" theme="primary" />);
        const buttonElement = screen.getByText("Click me");
        expect(buttonElement).toHaveClass("vf-button--primary");
    });

    test("applies outline class", () => {
        render(<VfButton text="Click me" outline />);
        const buttonElement = screen.getByText("Click me");
        expect(buttonElement).toHaveClass("vf-button--outline");
    });

    test("applies size class", () => {
        render(<VfButton text="Click me" size="lg" />);
        const buttonElement = screen.getByText("Click me");
        expect(buttonElement).toHaveClass("vf-button--lg");
    });

    test("applies style class", () => {
        render(<VfButton text="Click me" style="primary" />);
        const buttonElement = screen.getByText("Click me");
        expect(buttonElement).toHaveClass("vf-button--primary");
    });

    test("applies multiple style classes", () => {
        render(<VfButton text="Click me" style={["primary", "outline"]} />);
        const buttonElement = screen.getByText("Click me");
        expect(buttonElement).toHaveClass("vf-button--primary");
        expect(buttonElement).toHaveClass("vf-button--outline");
    });

    test("applies override class", () => {
        render(<VfButton text="Click me" override_class="custom-class" />);
        const buttonElement = screen.getByText("Click me");
        expect(buttonElement).toHaveClass("custom-class");
    });

    test("applies id attribute", () => {
        render(<VfButton text="Click me" id="button-id" />);
        const buttonElement = screen.getByText("Click me");
        expect(buttonElement).toHaveAttribute("id", "button-id");
    });
});