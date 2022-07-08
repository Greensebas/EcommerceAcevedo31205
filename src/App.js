import { initializeApp } from "firebase/app";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import FormCheckout from "./components/Form/FormCheckout";
import Home from "./components/Home/Home";
import Banner from "./components/ItemList/Banner";
import ItemDetailContainer from "./components/ItemList/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import MyProvider from "./Context/CartContext";




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
            <Route path="news" element={<Banner />} />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/categoria/:id" element={<ItemListContainer />} />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path="/contact" element={<Contacto />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/form" element={<FormCheckout />} />
          </Routes>
          <Footer />
        </MyProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
