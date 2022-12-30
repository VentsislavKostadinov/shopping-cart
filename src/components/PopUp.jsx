import styles from "../style/PopUp.module.scss";
import ReviewList from "./ReviewList";
import EmptyBasket from "./EmptyBasket";
import PlaceOrder from "./PlaceOrder";
import ReviewListTotalSum from "./ReviewListTotalSum";
import propTypes from "prop-types";

const PopUp = (props) => {

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
                                                <div key={index}>
                                                    <ReviewList name={item.name} price={item.price} />
                                                </div>
                                            )
                                        })
                                    )
                                }

                                {
                                    props.items.length === 0 && !props.submitOrder && <EmptyBasket />
                                }

                                {
                                    props.items.length === 0 && props.submitOrder && <PlaceOrder />

                                }

                                {
                                    props.items.length !== 0 && <ReviewListTotalSum totalSum={props.totalSum} />
                                }
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}

export default PopUp;

PopUp.propTypes = {
    toggleShow: propTypes.bool,
    submitOrder: propTypes.bool,
    items: propTypes.array,
    totalSum: propTypes.number
}