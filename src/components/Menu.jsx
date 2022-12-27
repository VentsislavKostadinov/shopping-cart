import data from "../data/data.json";
import styles from "../style/Menu.module.scss";
import { useState, useEffect } from "react";
const Menu = () => {

  const [orderValues, setOrderValues] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleClick = (selectedElement) => {
    setOrderValues([...orderValues, selectedElement]);
  };

  const calculateTotalSum = () => {
    let sum = 0;
    orderValues.map(element => {
      sum += element.price;
      return setTotalPrice(sum);
    });
  };

  useEffect(() => {
    calculateTotalSum();
  }, [orderValues]);

  return (
    <div className={styles.menuWrap}>
      {
        data?.items?.map((element, index) => {
          const { image, name, caption, price, shoppingBasket } = element;
          return (
            <div className={styles.cards} key={index}>
              <img className={styles.menuImage} src={image} alt="img" />
              <article>
                <h6 className={styles.title}>{name}</h6>
                <p>{caption}</p>
                <h6><span>$</span>{price}</h6>
                <img onClick={() => handleClick(element)} className={styles.shoppingBasket} src={shoppingBasket} alt="shopping-basket" />
              </article>
            </div>
          )
        })
      }
      <h3 style={{ color: "black" }}><span>$</span>{totalPrice}</h3>
    </div>
  )
}

export default Menu;