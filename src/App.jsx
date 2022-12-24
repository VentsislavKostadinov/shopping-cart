import styles from "./style/App.module.scss";
import Navigation from "./Navigation";
import Banner from "./Banner";

function App() {
  return (
    <div className={styles.app}>
     <Navigation />
     <Banner />
    </div>
  );
}

export default App;
