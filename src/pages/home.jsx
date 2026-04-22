import { useEffect, useState } from "react";
import { fetchProjects, fetchByDate } from "../service/api";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

export default function Home() {
  const [dado, setDado] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    if (date) {
      fetchByDate(date).then(setDado);
    } else {
      fetchProjects().then(setDado);
    }
  }, [date]);

  return (
    <>
      <Navbar />

      <div className="date-container">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {dado.length === 1 && dado[0].title.includes("Backup") && (
        <p style={{ textAlign: "center" }}>
          ⚠️ API da NASA indisponível (modo offline)
        </p>
      )}

      <div className="grid">
        {dado.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}