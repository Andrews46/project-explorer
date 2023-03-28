import NavBar from "../component/navBar";
import Footer from "../component/footer";
import styles from "../style/home.module.scss";

export default function Home() {
  return (
    <div className={styles.Home}>
      <NavBar />
      <Footer />
    </div>
  );
}
