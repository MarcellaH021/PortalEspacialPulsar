import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProjects } from "../service/api";
import Navbar from "../components/Navbar";

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
      <h2>{item.title}</h2>
      <img src={item.image} width={250} />
      <p>{item.description}</p>
    </div>
  );
}