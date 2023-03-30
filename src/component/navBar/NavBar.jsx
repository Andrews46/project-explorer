import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const NavBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const onHandleInput = (e) => setInput(() => e.target.value);
  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate(`/city/${input}`);
    setInput(() => "");
  };

  return (
    <div className={styles.NavBar}>
      <div className={styles.Container}>
        <ul>
          <li>
            <Link to="/">Home page</Link>
          </li>
          <li>
            <Link to="Activities">Attività</Link>
          </li>

          <li>
            <Link to="City/:id">Città</Link>
          </li>
          <li>
            <Link to="About">About</Link>
          </li>
        </ul>
      </div>
      <form onSubmit={onHandleSubmit}>
        <input
          onChange={onHandleInput}
          value={input}
          type="text"
          placeholder="Cerca..."
        />
      </form>
    </div>
  );
};
export default NavBar;
