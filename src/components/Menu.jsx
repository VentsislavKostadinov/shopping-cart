import data from "../data/data.json";
import styles from "../style/Menu.module.scss";
import { useState, useEffect, useRef } from "react";
import Basket from "./Basket";
import TotalSum from "./TotalSum";
import OrderButton from "./OrderButton";
import PopUpItems from "./PopUpItems";
import { storeItemsInLocalStorage, clearLocalStorage, calculateTotalSum } from "../utils/utils";

const Menu = () => {
  const orderValuesLocalstorage = JSON.parse(localStorage.getItem("orderValues"));
  const [orderValues, setOrderValues] = useState(orderValuesLocalstorage === null ? [] : orderValuesLocalstorage);
  const [totalSum, setTotalSum] = useState(0);
  const [toggleShow, setToggleShow] = useState(false);
  const [submitOrder, setSubmitOrder] = useState(false);
  const myRef = useRef();

  const handleSelectItem = (selectedElement) => {
    setOrderValues([...orderValues, selectedElement]);
  }

  const handleClickOutsidePage = e => {
    if (!myRef.current.contains(e.target)) setToggleShow(false);
  }
  const handleClickInsidePage = () => {
    setToggleShow(true);
    setSubmitOrder(false);
  }

  const handleHidePopUpOnEscapeBtn = (e) => {
    if (e.key === "Escape") setToggleShow(false);
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutsidePage);
    document.addEventListener("keydown", handleHidePopUpOnEscapeBtn);

    return () => {
      document.removeEventListener("click", handleClickOutsidePage);
      document.removeEventListener("keydown", handleHidePopUpOnEscapeBtn);
    }
  });

  useEffect(() => {
    calculateTotalSum(orderValues, setTotalSum);
    storeItemsInLocalStorage(orderValues);
  }, [orderValues]);

  const handleOrderBtn = () => {
    setOrderValues([]);
    setTotalSum(0);
    handleClickInsidePage();
    setSubmitOrder(true);
    clearLocalStorage();
  }

  return (
    <div className={styles.menu}>
      <div className={styles.menuWrap}>
        {
          data?.items?.map((element, index) => {
            const { image, name, caption, price } = element;
            return (
              <div className={styles.cards} key={index}>
                <img className={styles.menuImage} src={image} alt="img" />
                <article>
                  <h6 className={styles.title}>{name}</h6>
                  <p>{caption}</p>
                  <h6><span>$</span>{price.toFixed(2)}</h6>
                  <p className={styles.shoppingBasketMenu} onClick={() => handleSelectItem(element)}>
                    <Basket />
                  </p>
                </article>
              </div>
            )
          })
        }
      </div>
      <div className={styles.footerWrap} ref={myRef}>
        <div className={styles.shoppingBasketFooter} onClick={handleClickInsidePage}>
          <Basket />
        </div>
        <TotalSum totalSum={totalSum} />
        <OrderButton handleOrderBtn={handleOrderBtn} />
      </div>
      <PopUpItems toggleShow={toggleShow} submitOrder={submitOrder} items={orderValues} totalSum={totalSum} />
    </div>
  )
}

export default Menu;