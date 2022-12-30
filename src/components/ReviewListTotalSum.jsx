import dummy from "../dummy/dummy.json";
import styles from "../style/ReviewListTotalSum.module.scss";
import propTypes from "prop-types";

const ReviewListTotalSum = (props) => {
    const reviewListTotalSumTitles = dummy?.popUpItems

    return (
        <>
            <hr />
            <div className={styles.popUpItemsfooter}>
                <h4>{reviewListTotalSumTitles.totalSumMessage}</h4>
                <h4><span>{reviewListTotalSumTitles.dollarSign} </span>{props.totalSum.toFixed(2)}</h4>
            </div>
        </>
    )
}

export default ReviewListTotalSum;

ReviewListTotalSum.propTypes = {
    totalSum: propTypes.number
}