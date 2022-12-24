import styles from "../style/Navigation.module.scss";
import freeDeliveryImage from "../assets/images/free-delivery.png";
const Navigation = () => {

    return (
        <nav>
            <ul>
                <li><a href="/" className={styles.logo}>BRUNCHY</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Call us</a></li>
                <li ><a href="/#" className={styles.deliveryNav}><span>Free delivery</span> <img className={styles.imgFluid} src={freeDeliveryImage} alt="img" /></a></li>
            </ul>
        </nav>
    )
}

export default Navigation;