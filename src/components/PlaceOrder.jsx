import styles from "../style/PlaceOrder.module.scss";
import dummy from "../dummy/dummy.json";

const PlaceOrder = () => {
    const popUpItemsTitles = dummy?.popUpItems;

    return (
        <div className={styles.placeOrder}>
            <h3>{popUpItemsTitles.congratulationsTitle}</h3>
            <p>{popUpItemsTitles.orderTitle}</p>
            <button>{popUpItemsTitles.okMessage}</button>
        </div>
    )
}

export default PlaceOrder;