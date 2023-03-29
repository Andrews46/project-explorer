import { useState, useEffect } from "react";
import CardList from "../../component/cardList";
import { GET } from "../../utils/http";

import styles from "../../style/index.module.scss";

export default function Activities() {
  const [attivita, setAttivita] = useState([]);

  useEffect(() => {
    GET(`products`).then((data) => {
      console.log(data);
      setAttivita(data);
    });
  }, []);

  const filterList = (list, category) =>
    list.filter((item) => item.category === category);
  return (
    <div className={styles.Activity}>
      <section>
        <h2>Categoria: Elettronica</h2>
        <CardList data={filterList(attivita, "electronics")} />
      </section>
      <section>
        <h2>Categoria: Vestiti</h2>
        <CardList data={filterList(attivita, "men's clothing")} />
      </section>
    </div>
  );
}
