import React, { useState } from 'react'
import "./itemCount.css";

function ItemCount ({inicial, stock, onAdd}) {
    const [count, setCount] = useState(inicial);

    const sumar = () => {
        count < stock? setCount(count + 1) : alert("No puedes agregar más productos")
    }

    const restar = () => {
        count > inicial? setCount(count - 1) : alert("No puedes solicitar menos de 1 producto")
    }

    const reset = () => {
        setCount(inicial);
    }



  return (
    <>
      <div className="flex-container">
        <div className="card text-center card-container" style={{ width: "18rem" }}>
          <div className="card-body">
            <div>
                <img src="img/libretaVacunacion.jpeg" alt="" width="180" height="240"></img>
            </div>            
            <h4 className="card-title">Producto</h4>
            <p className="card-text">
              Breve descripción del producto.
            </p>
            <div className="contenedor">
                <button className="boton" onClick={restar}>
                    <span className="span s1"></span>
                    <span className="span s2"></span>
                    <span className="span s3"></span>
                    <span className="span s4"></span>
                    Eliminar
                </button>
                <span className="contador">{count}</span>
                <button className="boton" onClick={sumar}>
                    <span className="span s1"></span>
                    <span className="span s2"></span>
                    <span className="span s3"></span>
                    <span className="span s4"></span>
                    Agregar
                </button>
            </div>
            <div>
                <button className="boton" onClick={() => {onAdd(count); reset()}}>
                    <span className="span s1"></span>
                    <span className="span s2"></span>
                    <span className="span s3"></span>
                    <span className="span s4"></span>
                    Agregar al carrito
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemCount