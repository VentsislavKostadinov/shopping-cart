import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

test("Check if Banner title is available", () => {
    render(<Banner />);
    const bannerTitle = screen.getByText(/The fastest brunch delivery in/i);
    expect(bannerTitle).toBeInTheDocument();
})