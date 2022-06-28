import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemList/ItemDetailContainer";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import Banner from "./components/ItemList/Banner";
import Cart from "./components/Cart/Cart";
import MyProvider from "./Context/CartContext";
import { initializeApp } from "firebase/app";




function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyBRMwgzPXDU6UYOUibWFDiu0YAKtGCPp94",
    authDomain: "acevedo31205.firebaseapp.com",
    projectId: "acevedo31205",
    storageBucket: "acevedo31205.appspot.com",
    messagingSenderId: "118886049874",
    appId: "1:118886049874:web:a831308a7fe322bfc0178b"
  };
  
  initializeApp(firebaseConfig);

  return (
    <>
      <BrowserRouter>
        <MyProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="noticias" element={<Banner />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/categoria/:id" element={<ItemListContainer />} />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </MyProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
