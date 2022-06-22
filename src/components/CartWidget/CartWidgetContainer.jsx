import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import './cartWidget.css';
import {Link} from 'react-router-dom';
// import CartWidgetLayout from "./CartWidgetLayout";

function CartWidgetContainer() {

  const {getItemQty} = useContext(CartContext)

  return (
    <li className="nav-item">
      <Link to="/cart" className="nav-link">
        <div className="carrito">
          <i className="bi bi-cart icono"></i>
          <i className="numero">{getItemQty()}</i>
        </div>
      </Link>
    </li>
  );
}

export default CartWidgetContainer;
