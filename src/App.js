import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemList/ItemDetailContainer';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import Banner from './components/ItemList/Banner';


function App() {
  return (<>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="noticias" element={<Banner />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>

  );
}

export default App;

// ESTO PODRÍA IR EN EL COMPONENTE HOME SI ES QUE LO PERMITEN
  // <div>
  //   <NavBar />
  //   <Banner greeting="SOMOS FIODORA DISEÑO GRÁFICO" />
  //   <ItemListContainer />
  //   <HeroContainer />
  //   <ItemDetailContainer />
  // </div>