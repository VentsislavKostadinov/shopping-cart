import styles from "../style/Banner.module.scss";

const Banner = () => {
    return (
        <div className={styles.bannerWrapper}>
            <div className={styles.banner}>
         <h2>The fastest brunch delivery in <span>Your city</span></h2>
         </div>
        </div>
    )
}

export default Banner;