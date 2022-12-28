import styles from "../style/PopUp.module.scss";

const PopUpItems = (props) => {

    return (
        <>
            {
                props.toggleShow ? (
                    <div className={styles.popUpItems}>
                        <div className={styles.popUpItemsContent}>
                            {
                                props.items.map((item, index) => {
                                    return (
                                        <div className={styles.popUpItemsContentSelected} key={index}>
                                         <h4>{item.name}</h4>
                                         <h4><span>$ </span>{item.price.toFixed(2)}</h4>
                                        </div>
                                    )
                                })
                            }
                            <hr />
                            <div className={styles.popUpItemsfooter}>
                             <h4>Total:</h4>
                             <h4><span>$ </span>{props.totalSum.toFixed(2)}</h4>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}

export default PopUpItems;