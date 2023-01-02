import styles from "../style/ReviewList.module.scss";
import propTypes from "prop-types";
import dummy from "../dummy/dummy.json";

const ReviewList = (props) => {

    return (
        <div className={styles.popUpItemsContentSelected}>
            <h4>{props.name}</h4>
            <h4><span>{dummy.popUpItems.dollarSign} </span>{props.price?.toFixed(2)}</h4>
        </div>
    )
}

export default ReviewList;

ReviewList.propTypes = {
    name: propTypes.string,
    price: propTypes.number
}