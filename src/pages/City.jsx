import { useSearchParams } from "react-router-dom";
import styles from "../style/city.module.scss";

export default function City() {
  const [searchParams] = useSearchParams();
  return (
    <div className={styles.City}>
      {searchParams.get("date") && (
        <h1>Hai prenotato per la data {searchParams.get("date")}</h1>
      )}
    </div>
  );
}
