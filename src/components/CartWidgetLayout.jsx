import React from "react";
import './CartWidget.css';

function CartWidgetLayout({cantProd}) {
  return (
    <div>
      <i className="bi bi-cart icono"></i>
      <i className="numero">{cantProd}</i>
    </div>
  );
}

export default CartWidgetLayout;
