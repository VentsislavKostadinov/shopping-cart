import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";


describe("Check if navigation titles are available", () => {

    test("Check if brand title is available", () => {
        render(<Navigation />);

        const bannerTitle = screen.getByText(/brunchy/i);
        expect(bannerTitle).toBeInTheDocument();
    });

    test("Check if about title is available", () => {
        render(<Navigation />);

        const aboutTitle = screen.getByText(/about/i);
        expect(aboutTitle).toBeInTheDocument();
    });

    test("Check if Call us title is available", () => {
        render(<Navigation />);

        const callUsTitle = screen.getByText(/call us/i);
        expect(callUsTitle).toBeInTheDocument();
    });

    test("Check if Free deliver title is available", () => {
        render(<Navigation />);

        const freeDeliveryTitle = screen.getByText(/free delivery/i);
        expect(freeDeliveryTitle).toBeInTheDocument();
    });

    test("Check if image alt text is available", () => {
        render(<Navigation />);

        const freeDeliveryAltTitle= screen.getByAltText(/free delivery/i);
        expect(freeDeliveryAltTitle).toBeInTheDocument();
    });
});

