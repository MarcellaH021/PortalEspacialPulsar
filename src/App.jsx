import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import News from "./pages/news"

import './App.css'

function App() {
  return(
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/sobre' element = {<About />} />
      <Route path='/news' element = {<News />} />
    </Routes>
  )
}

export default App
