import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { VFBackToTop } from "./vf-back-to-top";

describe("VFBackToTop component", () => {
    test("renders with default props", () => {
        render(<VFBackToTop />);
        expect(screen.getByText("Back to top")).toBeInTheDocument();
    });

    test("renders with custom text", () => {
        render(<VFBackToTop text="Go up" />);
        expect(screen.getByText("Go up")).toBeInTheDocument();
    });

    test("is not visible by default", () => {
        const { container } = render(<VFBackToTop />);
        expect(screen.queryByRole("button", { name: /back to top/i })).toBeNull();
    });

    test("becomes visible when scrolled past one full screen height", () => {
        const { container } = render(<VFBackToTop type="floating" />);
        fireEvent.scroll(window, { target: { scrollY: window.innerHeight + 1 } });
        expect(screen.getByRole("button", { name: /back to top/i })).toBeInTheDocument();
    });

    test("scrolls to the top when clicked", () => {
        const { container } = render(<VFBackToTop type="floating" />);
        fireEvent.scroll(window, { target: { scrollY: window.innerHeight + 1 } });
        const button = screen.getByRole("button", { name: /back to top/i });
        fireEvent.click(button);
        expect(window.scrollY).toBe(0);
    });

    test("scrolls to the specified element when clicked", () => {
        document.body.innerHTML = '<div id="target-element" style="margin-top: 2000px;"></div>';
        const { container } = render(<VFBackToTop type="floating" scrollToId="target-element" />);
        fireEvent.scroll(window, { target: { scrollY: window.innerHeight + 1 } });
        const button = screen.getByRole("button", { name: /back to top/i });
        fireEvent.click(button);
        const targetElement = screen.getByText("target-element");
        expect(targetElement.scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
    });
});