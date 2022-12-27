import data from "../data/data.json";
import styles from "../style/Menu.module.scss";
const Menu = () => {

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
                <img className={styles.shoppingBasket} src={shoppingBasket} alt="shopping-basket" />
              </article>
            </div>
          )
        })
      }
    </div>
  )
}

export default Menu;