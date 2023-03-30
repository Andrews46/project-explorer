import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const Card = ({ data }) => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate(`/activities/${data.uuid}`);
  };
  return (
    <div className={styles.Card} onClick={onHandleClick}>
      <img src={data.cover_image_url} alt={data.name} />
      {/* <h3>{data.title.split(" ").splice(0, 3).join(" ")}</h3> */}
      <p>{data.title}</p>
    </div>
  );
};

export default Card;
