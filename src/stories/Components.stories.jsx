import App from "../App";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Basket from "../components/Basket";
import EmptyBasket from "../components/EmptyBasket";
import PopUp from "../components/PopUp";
import Footer from "../components/Footer";
import OrderButton from "../components/OrderButton";
import MenuItems from "../components/MenuItems";
import PlaceOrder from "../components/PlaceOrder";
import ReviewList from "../components/ReviewList";
import ReviewListTotalSum from "../components/ReviewListTotalSum";
import TotalSum from "../components/TotalSum";

export default {
    title: "Components",
    component: App
}
export const navigation = () => <Navigation />;
export const banner = () => <Banner />;
export const basket = () => <Basket />;
export const emptyBasket = () => <EmptyBasket />;
export const popup = () => <PopUp />;
export const footer = () => <Footer />;
export const orderButton = () => <OrderButton />;
export const menuItems = () => <MenuItems />;
export const placeOrder = () => <PlaceOrder />;
export const reviewList = () => <ReviewList />;
export const reviewListTotalSum = () => <ReviewListTotalSum />;
export const totalSum = () => <TotalSum />;