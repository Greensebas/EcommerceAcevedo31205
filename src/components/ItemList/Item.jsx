import React from 'react'

function Item({producto}) {
    const {tipo, descripcion, precio, stock, imagen} = producto
  return (
    <div className="card" style={{ width: "15rem", margin: "20px" }}>
        <img src={imagen} class="card-img-top" alt="..."></img>
        <div className="card-body">
          <h2 className="card-title">{tipo}</h2>
          <h5 className="card-text">{descripcion}</h5>
          <p className="card-text">
              Precio: {precio} <br />
              Stock: {stock}
          </p>
          <a href="asdf" class="btn btn-primary">Ver detalle</a>
        </div>
    </div>
  )
}

export default Item

