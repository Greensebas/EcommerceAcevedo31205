import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";



function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cel, setCel] = useState("");
  const {cart, getItemPrice} = useContext(CartContext);

  const db = getFirestore();
  const orderCollection = collection(db, "orders");


  function handleClick() {

    if (name===("") || email===("") || cel===("")) {
      alert("no ingreso datos");
      return
    }

    const order = {
      buyer: {name, email, cel},
      items: cart,
      total: getItemPrice()
    };

    // guardar en la base de datos
    addDoc(orderCollection, order).then(({id}) => {
      console.log(id)
    })

  }

  return (
    <div className="container top-navbar py-5">
      <div className="row">
        <h1>COMPLETE PARA TERMINAR SU COMPRA</h1>
        <input onChange={(e)=> setName(e.target.value)} placeholder="Ingrese su nombre"></input>
        <input onChange={(e)=> setEmail(e.target.value)} placeholder="Ingrese su e-mail"></input>
        <input onChange={(e)=> setCel(e.target.value)} placeholder="Ingrese un teléfono de contacto"></input>
        <button onClick={() => handleClick()}>TERMINAR COMPRA</button>
      </div>
    </div>
  );
}

export default Checkout;
