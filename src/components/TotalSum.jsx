import styles from "../style/TotalSum.module.scss";
import propTypes from "prop-types";

const TotalSum = (props) => { return <h2 className={styles.totalSumCounter}>${props.totalSum.toFixed(2)}</h2> }
export default TotalSum;

TotalSum.propTypes = {
    totalSum: propTypes.number
}