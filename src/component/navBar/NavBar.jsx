import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.Container}>
        <ul>
          <li>
            <Link to="/">Home page</Link>
          </li>
          <li>
            <Link to="Activity/:id">Attività</Link>
          </li>
          <li>
            <Link to="City/:id">Città</Link>
          </li>
          <li>
            <Link to="About">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
