import { useProjects } from "../context/ProjectContext";
import Navbar from "../components/Navbar";

export default function Favorites() {
  const { favorites } = useProjects();

  return (
    <div>
      <Navbar />
      <h1>Favoritos ⭐</h1>

      {favorites.length === 0 && <p>Sem favoritos</p>}

      {favorites.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}