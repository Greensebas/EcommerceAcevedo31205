import React from "react";
import './CartWidget.css';
import CartWidgetLayout from "./CartWidgetLayout";

function CartWidgetContainer() {
  let carrito = ["producto1", "producto2", "producto3"];
  let cantProd = carrito.length;
  return <CartWidgetLayout cantProd={cantProd}/>  ;
}

export default CartWidgetContainer;
