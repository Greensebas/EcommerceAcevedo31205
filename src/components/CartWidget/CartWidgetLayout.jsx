import React from "react";
import './cartWidget.css';

function CartWidgetLayout({cantProd}) {
  return (
  <li className="nav-item">
    <a className="nav-link" href="https://google.com">
      <div className="carrito">
       <i className="bi bi-cart icono"></i>
       <i className="numero">{cantProd}</i>
     </div>
    </a>
  </li>
  );
}

export default CartWidgetLayout;
    