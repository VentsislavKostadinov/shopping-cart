import data from "../data/data.json";
import styles from "../style/Menu.module.scss";
import { useState, useEffect, useRef } from "react";
import Basket from "./Basket";
import FooterTotalSum from "./FooterTotalSum";
import OrderButton from "./OrderButton";
import PopUp from "./PopUp";
import { storeItemsInLocalStorage, clearLocalStorage, calculateTotalSum, addEventListeners, removeEventListeners } from "../utils/utils";
import Footer from "./Footer";
import ErrorHandling from "./ErrorHandling";
import dummy from "../dummy/dummy.json";

const SelectItems = () => {
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
    addEventListeners("click", handleClickOutsidePage);
    addEventListeners("keydown", handleHidePopUpOnEscapeBtn);

    return () => {
      removeEventListeners("click", handleClickOutsidePage);
      removeEventListeners("keydown", handleHidePopUpOnEscapeBtn);
    }
  }, []);

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
    <>
      {
        data?.items?.length === 0 ? (
          <ErrorHandling />
        ) : (
          <div className={styles.menuItems}>
            <div className={styles.menuitemsWrap}>
              {
                data?.items?.map((element, index) => {
                  const { image, name, caption, price } = element;
                  return (
                    <div className={styles.cards} key={index}>
                      <img className={styles.menuImage} src={image} alt="img" />
                      <article>
                        <h4 className={styles.title}>{name}</h4>
                        <p>{caption}</p>
                        <h4><span>{dummy.popUpItems.dollarSign}</span>{price.toFixed(2)}</h4>
                        <p className={styles.shoppingBasketMenu} onClick={() => handleSelectItem(element)}>
                          <Basket />
                        </p>
                      </article>
                    </div>
                  )
                })
              }
            </div>
            <Footer>
              <div className={styles.footerWrap} ref={myRef}>
                <div className={styles.shoppingBasketFooter} onClick={handleClickInsidePage}>
                  <Basket />
                </div>
                <FooterTotalSum totalSum={totalSum} />
                <OrderButton handleOrderBtn={handleOrderBtn} />
              </div>
            </Footer>
            <PopUp toggleShow={toggleShow} submitOrder={submitOrder} items={orderValues} totalSum={totalSum} />
          </div>
        )
      }
    </>
  )
}

export default SelectItems;