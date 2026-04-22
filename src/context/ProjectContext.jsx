import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/localStorage";

const Context = createContext();

export function ProjectProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage("fav", []);

  function addFavorite(item) {
    setFavorites([...favorites, item]);
  }

  function removeFavorite(id) {
    const filtered = favorites.filter((item) => item.id !== id);
    setFavorites(filtered);
  }

  return (
    <Context.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </Context.Provider>
  );
}

export function useProjects() {
  return useContext(Context);
}