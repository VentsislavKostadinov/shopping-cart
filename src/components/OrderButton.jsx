import styles from "../style/OrderButton.module.scss";

const OrderButton = (props) => { return <button className={styles.orderButton} onClick={props.handleOrderBtn}>Order Now</button> }
export default OrderButton;