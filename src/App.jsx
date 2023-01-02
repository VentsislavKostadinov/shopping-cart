import styles from "../src/style/App.module.scss";
import Navigation from "../src/components/Navigation";
import Banner from "../src/components/Banner";
import SelectItems from "./components/SelectItems";

function App() {
  return (
    <div className={styles.app}>
     <Navigation />
     <Banner />
     <SelectItems />
    </div>
  );
}

export default App;
