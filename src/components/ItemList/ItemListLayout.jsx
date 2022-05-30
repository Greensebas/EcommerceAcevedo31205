import React from "react";
import "./ItemList.css";

function ItemListLayout({ greeting }) {
  return (
    <div className="saludo">
      <div className="divMargin">
        <h1>{greeting}</h1>
        <p>FIODORA es un espacio dedicado a la encuadernación artesanal de agendas, fotolibros, cuadernos y 
           libretas cuidando hasta el último detalle </p>
      </div>
    </div>
  );
}

export default ItemListLayout;


/*
    <div className="saludo align-middle">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="divMargin">
              <h1>{greeting}</h1>
              <p>FIODORA es un espacio dedicado a la encuadernación artesanal de agendas, fotolibros, cuadernos y 
              libretas cuidando hasta el último detalle </p>
            </div>
          </div>
        </div>
      </div>
    </div>
*/ 