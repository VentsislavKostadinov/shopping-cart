import data from "../data/data.json";
import styles from "../style/Menu.module.scss";
import { useState, useEffect, useRef } from "react";
import Basket from "./Basket";
import TotalSum from "./TotalSum";
import OrderButton from "./OrderButton";
import PopUpItems from "./PopUpItems";

const Menu = () => {
  const [orderValues, setOrderValues] = useState([]);
  const [totalSum, setTotalSum] = useState(0.00);
  const [toggleShow, setToggleShow] = useState(false);
  const myRef = useRef();

  const handleSelectItem = (selectedElement) => {
    setOrderValues([...orderValues, selectedElement]);
  };

  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target)) {
      setToggleShow(false);
    }
  };
  const handleClickInside = () => setToggleShow(true);

  const handleHidePopUpOnEscapeBtn = (e) => {
    if (e.key === "Escape") setToggleShow(false);
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleHidePopUpOnEscapeBtn);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleHidePopUpOnEscapeBtn);
    }
  });


  const calculateTotalSum = () => {
    let sum = 0;
    orderValues.map(element => {
      sum += element.price;
      return setTotalSum(sum);
    });
  };

  useEffect(() => {
    calculateTotalSum();
  }, [orderValues]);

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
      <div className={styles.footerWrap}>
        <div className={styles.shoppingBasketFooter} ref={myRef} onClick={handleClickInside}>
          <Basket />
        </div>
        <TotalSum totalSum={totalSum} />
        <OrderButton />
      </div>
      <PopUpItems toggleShow={toggleShow} items={orderValues} totalSum={totalSum} />
    </div>
  )
}

export default Menu;