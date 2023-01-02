import styles from "../style/FooterTotalSum.module.scss";
import propTypes from "prop-types";

const FooterTotalSum = (props) => { return <p className={styles.totalSumCounter}>{props.totalSum?.toFixed(2)}$</p> }
export default FooterTotalSum;

FooterTotalSum.propTypes = {
    totalSum: propTypes.number
}