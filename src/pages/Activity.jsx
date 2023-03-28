import { useState, useEffect } from "react";
import { GET } from "../utils/http";
import styles from "../style/activity.module.scss";

export default function Activity() {
  const [attivita, setAttivita] = useState([]);

  useEffect(() => {
    GET("activities").then((data) => {
      console.log(data);
      setAttivita(data.data);
    });
  }, []);
  return (
    <div className={styles.Activity}>
      <h1>sono Activity</h1>
    </div>
  );
}
