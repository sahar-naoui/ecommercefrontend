import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Listcategories from "./components/categories/Listcategories"
import Insertcategorie from "./components/categories/Insertcategorie";
import Editcategorie from "./components/categories/Editcategorie";
import Viewcategorie from "./components/categories/Viewcategorie";
import Listscategories from "./components/scategories/Listscategories";
import Insertscategories from "./components/scategories/Insertscategories";
import Editscategorie from "./components/scategories/Editscategorie";
import Viewscategorie from "./components/scategories/Viewscategorie";
import Listarticles from "./components/articles/Listarticles";
import Insertarticle from "./components/articles/Insertarticle";
import Editarticle from "./components/articles/Editarticle";
import Viewarticle from "./components/articles/Viewarticle";
import Menu from "./components/Menu";
function App() {

  return (
    <>
    <Router>
      <Menu/>
      <Routes>
        <Route path="/categories" element={<Listcategories/>}/>
        <Route path="/categories/add" element={<Insertcategorie/>}/>
        <Route path="/categories/edit/:id" element={<Editcategorie/>}/>
        <Route path="/categories/view/:id" element={<Viewcategorie/>}/>
        <Route path="/scategories" element={<Listscategories/>}/>
        <Route path="/scategories/add" element={<Insertscategories/>}/>
        <Route path="/scategories/edit/:id" element={<Editscategorie/>}/>
        <Route path="/scategories/view/:id" element={<Viewscategorie/>}/>
        <Route path="/articles" element={<Listarticles/>}/>
        <Route path="/articles/add" element={<Insertarticle/>}/>
        <Route path="/article/edit/:id" element={<Editarticle/>}/>
        <Route path="/article/view/:id" element={<Viewarticle/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
