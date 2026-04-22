import { useProjects } from "../context/ProjectContext";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

export default function Favorites() {
  const { favorites } = useProjects();

  return (
    <>
      <Navbar />

      {favorites.length === 0 ? (
        <p style={{ textAlign: "center" }}>
          Sem favoritos!
        </p>
      ) : (
        <div className="grid">
          {favorites.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
}