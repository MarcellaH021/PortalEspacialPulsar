import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/localStorage";

const Context = createContext();

export function ProjectProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage("fav", []);

  const addFavorite = (item) => {
    setFavorites([...favorites, item]);
    alert("Favoritado ⭐");
  };

  return (
    <Context.Provider value={{ favorites, addFavorite }}>
      {children}
    </Context.Provider>
  );
}

export const useProjects = () => useContext(Context);