import styles from "../src/style/App.module.scss";
import Navigation from "../src/components/Navigation";
import Banner from "../src/components/Banner";
import MenuItems from "./components/MenuItems";

function App() {
  return (
    <div className={styles.app}>
     <Navigation />
     <Banner />
     <MenuItems />
    </div>
  );
}

export default App;
