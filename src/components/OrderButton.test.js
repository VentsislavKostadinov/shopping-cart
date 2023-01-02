import { render, screen } from "@testing-library/react";
import OrderButton from "./OrderButton";

test("Check if order button is abailable", () => {

    render(<OrderButton />);
    const orderButton = screen.getByText(/order now/i);

})