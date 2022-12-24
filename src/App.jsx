import styles from "../src/style/App.module.scss";
import Navigation from "../src/components/Navigation";
import Banner from "../src/components/Banner";

function App() {
  return (
    <div className={styles.app}>
     <Navigation />
     <Banner />
    </div>
  );
}

export default App;
