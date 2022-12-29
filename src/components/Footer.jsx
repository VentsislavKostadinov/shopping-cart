import styles from "../style/Footer.module.scss";

const Footer = (props) => <footer className={styles.footerElement}>{props.children}</footer>

export default Footer;