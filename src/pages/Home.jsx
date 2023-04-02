import { useSearchParams } from "react-router-dom";
import HomePage from "../component/homePage/";
import styles from "../style/home.module.scss";

export default function Home() {
  const [searchParams] = useSearchParams();
  const change = () => {
    searchParams.get("time");
    // console.log(searchParams);
  };
  return (
    <div className={styles.Home}>
      <HomePage />
    </div>
  );
}
