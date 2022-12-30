import styles from "../style/PopUp.module.scss";
import dummy from "../dummy/dummy.json";

const PopUpItems = (props) => {

    const popUpItemsTitles = dummy?.popUpItems;
    return (
        <>
            {
                props.toggleShow ? (
                    <div className={props.submitOrder ? styles.popUpItemsFullOpacity : styles.popUpItemsPartialOpacity}>
                        <div className={styles.popUpItemsWrap}>
                            <div className={styles.popUpItemsContent}>
                                {
                                    props.items.length !== 0 && !props.submitOrder && (
                                        props.items.map((item, index) => {
                                            return (
                                                <div className={styles.popUpItemsContentSelected} key={index}>
                                                    <h4>{item.name}</h4>
                                                    <h4><span>$ </span>{item.price.toFixed(2)}</h4>
                                                </div>
                                            )
                                        })
                                    )
                                }

                                {
                                    props.items.length === 0 && !props.submitOrder && <h4>You basket is empty</h4>
                                }

                                {
                                    props.items.length === 0 && props.submitOrder && (
                                        <div className={styles.successfulOrder}>
                                            <h3>{popUpItemsTitles.congratulationsTitle}</h3>
                                            <p>{popUpItemsTitles.orderTitle}</p>
                                            <button>{popUpItemsTitles.okMessage}</button>
                                        </div>
                                    )
                                }

                                {
                                    props.items.length !== 0 && (
                                        <>
                                            <hr />
                                            <div className={styles.popUpItemsfooter}>
                                                <h4>{popUpItemsTitles.totalSumMessage}</h4>
                                                <h4><span>{popUpItemsTitles.dollarSign} </span>{props.totalSum.toFixed(2)}</h4>
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}

export default PopUpItems;