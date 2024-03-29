import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style/about.module.scss";

export default function About() {
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const onHandleSubmit = (e) => {
    setInput(() => e.target.value);
  };

  const onHandleClick = () => {
    navigate(`/City/:id?date=${input}`);
  };
  return (
    <div className={styles.About}>
      <h1>Scegli la data per la prenotazione</h1>
      <input
        className={styles.inputData}
        onChange={onHandleSubmit}
        type="date"
        name=""
        id=""
      />
      <button className={styles.btnData} onClick={onHandleClick}>
        Imposta data
      </button>
    </div>
  );
}
