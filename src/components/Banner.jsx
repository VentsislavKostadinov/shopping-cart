import styles from "../style/Banner.module.scss";

const Banner = () => {
    return (
        <div className={styles.bannerWrapper}>
            <div className={styles.bannerTitle}>
                <h2>The fastest brunch delivery in <span>Your city</span></h2>
                <div className={styles.bannerSubtitle}>
                    <h5>This is my Exploration for Fruit - Food Delivery Landing Page 🍕. <br /> How about you?</h5>
                </div>
            </div>
        </div>
    )
}

export default Banner;