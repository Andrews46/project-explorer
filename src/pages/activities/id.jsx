import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET } from "../../utils/http";
import styles from "./id.module.scss";

export default function ActivityId() {
  const { id } = useParams();

  const [activitiId, setActivitiId] = useState([]);

  useEffect(() => {
    GET(`products/ ${id || 1}`).then((data) => {
      console.log(data);
      setActivitiId(data);
    });
  }, []);
  return (
    <div className={styles.ActivityId}>
      <h1>{activitiId.title}</h1>
      <p>{activitiId.id}</p>
      <p>{activitiId.price}</p>
      <p>{activitiId.description}</p>
      <p>{activitiId.category}</p>
      <img src={activitiId.image} alt={activitiId.title} />
    </div>
  );
}
