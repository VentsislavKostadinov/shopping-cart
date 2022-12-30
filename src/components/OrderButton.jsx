import styles from "../style/OrderButton.module.scss";
import dummy from "../dummy/dummy.json";
import propTypes from "prop-types";

const OrderButton = (props) => { return <button className={styles.orderButton} onClick={props.handleOrderBtn}>{dummy.orderButton.orderButtonTitle}</button> }
export default OrderButton;


OrderButton.propTypes = {
    handleOrderBtn: propTypes.func
}