import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProjects } from "../service/api";
import Navbar from "../components/Navbar";
import "./about.scss";

export default function Details() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchProjects().then((data) => {
      setItem(data.find((i) => i.id == id));
    });
  }, [id]);

  if (!item) return <p>Carregando...</p>;

  return (
    <div>
      <Navbar />
      <div className="details">
        <h2>{item.title}</h2>

        {item.media_type === "image" ? (
          <img src={item.image} />
        ) : (
          <p>📹 Vídeo não suportado</p>
        )}

        <p>{item.description}</p>

        <Link to="/">← Voltar</Link>
      </div>
    </div>
  );
}