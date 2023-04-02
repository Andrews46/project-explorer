import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./id.module.scss";
import myJson from "../../mock/musement.json";
export default function ActivityId() {
  const { id } = useParams();

  const [activitiId, setActivitiId] = useState({});

  useEffect(() => {
    const filter = myJson.data.filter((item) => item.uuid === id);
    setActivitiId(...filter);
  }, []);

  return (
    <div className={styles.ActivityId}>
      <img src={activitiId.cover_image_url} alt={activitiId.title} />
      <h1>{activitiId.title}</h1>
      <p>{activitiId.description}</p>
    </div>
  );
}
