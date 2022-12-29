import styles from "../style/PopUp.module.scss";

const PopUpItems = (props) => {

    return (
        <>
            {
                props.toggleShow ? (
                    <div className={props.submitOrder ? styles.popUpItemsFullOpacity : styles.popUpItemsPartialOpacity}>
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
                                        <h3>Congratulations!</h3>
                                        <p>Your order it's on its way.</p>
                                        <button>Ok</button>
                                    </div>
                                )
                            }

                            {
                                props.items.length !== 0 && (
                                    <>
                                        <hr />
                                        <div className={styles.popUpItemsfooter}>
                                            <h4>Total:</h4>
                                            <h4><span>$ </span>{props.totalSum.toFixed(2)}</h4>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}

export default PopUpItems;