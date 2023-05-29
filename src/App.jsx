import Navbar from "./components/Navbar"
import LayoutPublic from "./layouts/LayoutPublic"
import Blog from "./pages/Blog"
import Contacto from "./pages/Contacto"
import Inicio from "./pages/Inicio"
import {Routes, Route} from 'react-router-dom'
import NotFound from "./pages/NotFound"
import BlogDetails from "./pages/BlogDetails"

const App = () => {
  return (
    <>

    <Navbar/>
      
      <Routes>
        <Route path="/" element={<LayoutPublic/>}>
          <Route element={<Inicio/>} index></Route>
          <Route element={<Contacto/>} path="/contacto"></Route>
          <Route element={<Blog/>} path="/Blog"></Route>
          <Route element={<BlogDetails/>} path="/Blog/:id"></Route>
          <Route element={<NotFound/>} path="*"></Route>
        </Route>
        
      </Routes>

    
    </>

  )
}

export default App