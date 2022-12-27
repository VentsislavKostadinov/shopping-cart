import data from "../data/data.json";
import styles from "../style/Menu.module.scss";
const Menu = () => {

    return (
        <div className={styles.menuWrap}>
          {
            data?.items?.map((el, index) => {

               return (
                <div className={styles.cards}>
                <img src={el.image} alt="img" />
                <h6 className={styles.title}>{el.name}</h6>
                <p>{el.caption}</p>
                <h6><span>$</span>{el.price}</h6>
              </div>
               )
            })
          }
        </div>
    )
}

export default Menu;