import styles from "../style/TotalSum.module.scss";
const TotalSum = (props) => { return <h2 className={styles.totalSumCounter}>${props.totalSum.toFixed(2)}</h2> }
export default TotalSum;