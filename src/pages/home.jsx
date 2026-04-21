import { useEffect, useState } from "react";
import { fetchProjects } from "../service/api";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProjects().then(setData);
  }, []);

  if (data.length === 0) return <p>Carregando...</p>;

  return (
    <div className="grid">
  {data.map((item) => (
    <Card key={item.id} item={item} />
  ))}
      <Navbar />
      <h1>Portal 🚀</h1>

      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}