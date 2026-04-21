import { Link } from "react-router-dom";
import { useProjects } from "../context/ProjectContext";
import "./Card.scss";

export default function Card({ item }) {
  const { addFavorite } = useProjects();

  return (
    <div className="card">
      <h3>{item.title}</h3>
      <img src={item.image} width={150} />

      <br />

      <Link to={`/item/${item.id}`}>Detalhes</Link>

      <br />

      <button onClick={() => addFavorite(item)}>
        ⭐
      </button>
    </div>
  );
}