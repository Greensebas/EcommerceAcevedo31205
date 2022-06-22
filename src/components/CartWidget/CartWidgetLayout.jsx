import React from "react";
import { Link } from "react-router-dom";
import "./cartWidget.css";

function CartWidgetLayout({ cantProd }) {
  console.log(cantProd)
  return (
    <li className="nav-item">
      <Link to="/cart" className="nav-link">
        <div className="carrito">
          <i className="bi bi-cart icono"></i>
          <i className="numero">{cantProd}</i>
        </div>
      </Link>
    </li>
  );
}

export default CartWidgetLayout;
