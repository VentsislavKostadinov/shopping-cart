import styles from "../style/Banner.module.scss";
import dummy from "../dummy/dummy.json";

const Banner = () => {
    const bannerTitles = dummy?.banner;

    return (
        <div className={styles.bannerWrapper}>
            <h2>{bannerTitles.title} <span>{bannerTitles.highlightEndTitle}</span></h2><br />
            <h5>{bannerTitles.subTitle} <br />{bannerTitles.subTitleQuestion}</h5>
        </div>
    )
}

export default Banner;