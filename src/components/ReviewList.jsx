import styles from "../style/ReviewList.module.scss";
const ReviewList = (props) => {

    return (
        <div className={styles.popUpItemsContentSelected}>
            <h4>{props.name}</h4>
            <h4><span>$ </span>{props.price.toFixed(2)}</h4>
        </div>
    )
}

export default ReviewList;