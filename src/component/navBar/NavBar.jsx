import styles from "./index.module.scss";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <ul>
        <li>Home page</li>
        <li>Attività</li>
        <li>Città</li>
        <li>About</li>
      </ul>
    </div>
  );
};
export default NavBar;
