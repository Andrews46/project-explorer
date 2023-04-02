import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <img src="https://images.alphacoders.com/674/674925.png" alt="image" />
      <Link to="activities">
        <h1>Vai a vedere le nostre attività</h1>
      </Link>
    </div>
  );
};
export default HomePage;
