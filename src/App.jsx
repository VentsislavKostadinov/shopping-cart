import styles from "../src/style/App.module.scss";
import Navigation from "../src/components/Navigation";
import Banner from "../src/components/Banner";
import Menu from "./components/Menu";

function App() {
  return (
    <div className={styles.app}>
     <Navigation />
     <Banner />
     <Menu />
    </div>
  );
}

export default App;
