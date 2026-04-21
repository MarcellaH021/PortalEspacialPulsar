import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import NewsFav from "./pages/newsFav";
import { ProjectProvider } from "./context/ProjectContext";

export default function App() {
  return (
    <ProjectProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<About />} />
          <Route path="/favoritos" element={<NewsFav />} />
        </Routes>
      </BrowserRouter>
    </ProjectProvider>
  );
}