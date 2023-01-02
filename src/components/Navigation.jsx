import styles from "../style/Navigation.module.scss";
import freeDeliveryImage from "../assets/images/free-delivery.png";
import dummy from "../dummy/dummy.json";

const Navigation = () => {
    const navigationTitles = dummy?.navigation;

    return (
        <nav>
            <ul>
                <li><a href="/" className={styles.brandTitle}>{navigationTitles.brandTitleLogo.toUpperCase()}</a></li>
                <li><a href={navigationTitles.redirectUrl} target="_blank" rel="noreferrer">{navigationTitles.aboutTitle}</a></li>
                <li><a href={navigationTitles.redirectUrl} target="_blank" rel="noreferrer">{navigationTitles.callUsTitle}</a></li>
                <li><a href="/" className={styles.deliveryNav}><span>{navigationTitles.freeDeliveryTitle}</span> <img className={styles.imgFluid} src={freeDeliveryImage} alt="img" /></a></li>
            </ul>
        </nav>
    )
}

export default Navigation;