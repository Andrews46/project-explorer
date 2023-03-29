import { Outlet } from "react-router-dom";
import NavBar from "../component/navBar";
import Footer from "../component/footer";
import styles from "./index.module.scss";

const MainLayout = () => {
  return (
    <div className={styles.MainLayout}>
      <NavBar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
export default MainLayout;
