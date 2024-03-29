import { useState, useEffect } from "react";
import CardList from "../../component/cardList";
// import { GET } from "../../utils/http";
import myJson from "../../mock/musement.json";
import styles from "../../style/index.module.scss";

export default function Activities() {
  const [attivita, setAttivita] = useState([]);
  useEffect(() => {
    // GET(`activies?limit=20`).then((data) => {
    setAttivita(() => myJson.data);
    console.log(attivita);
  }, []);

  const filterAttivita = (list, country) =>
    list.filter((item) => item.city.country.iso_code === country);
  return (
    <div className={styles.Activity}>
      <section>
        <h2>Tour Francesi</h2>
        <CardList data={filterAttivita(attivita, "FR")} />
      </section>
      <section>
        <h2>Tour Americani</h2>
        <CardList data={filterAttivita(attivita, "US")} />
      </section>
      <section>
        <h2>Tour Italiani</h2>
        <CardList data={filterAttivita(attivita, "IT")} />
      </section>
      <section>
        <h2>Tour Tedeschi</h2>
        <CardList data={filterAttivita(attivita, "DE")} />
      </section>
      <section>
        <h2>Tour Spagnoli</h2>
        <CardList data={filterAttivita(attivita, "ES")} />
      </section>
      <section>
        <h2>Tour Giapponesi</h2>
        <CardList data={filterAttivita(attivita, "JP")} />
      </section>
      <section>
        <h2>Tour Portoghesi</h2>
        <CardList data={filterAttivita(attivita, "PT")} />
      </section>
    </div>
  );
}
