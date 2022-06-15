import React from 'react'
import { Link } from 'react-router-dom'

function Item({producto}) {
    const {id, categoria, descripcion, precio, stock, imagen} = producto
  return (
    <div className="card" style={{ width: "15rem", margin: "20px" }}>
        <img src={imagen} class="card-img-top" alt="..."></img>
        <div className="card-body">
          <h2 className="card-title">{categoria}</h2>
          <h5 className="card-text">{descripcion}</h5>
          <p className="card-text">
              Precio: {precio} <br />
              Stock: {stock}
          </p>
          <Link to={`/producto/${id}`} className="btn btn-primary">Ver detalle</Link>
        </div>
    </div>
  )
}

export default Item

