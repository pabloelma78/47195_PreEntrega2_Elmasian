import './App.css'
import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Detalle from './componentes/Detalle'
const App =() => {
  return (
        <>
        
        <h1>2da preEntrega Elmasian</h1>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/detalle/:id' element={<Detalle />}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          
          
        </Routes>     
        
        </>

)
}

export default App
