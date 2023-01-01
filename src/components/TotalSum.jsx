import styles from "../style/TotalSum.module.scss";
import propTypes from "prop-types";

const TotalSum = (props) => { return <p className={styles.totalSumCounter}>{props.totalSum?.toFixed(2)}$</p> }
export default TotalSum;

TotalSum.propTypes = {
    totalSum: propTypes.number
}