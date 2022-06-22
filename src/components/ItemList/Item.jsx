import React from 'react'
import { Link } from 'react-router-dom'

function Item({producto}) {
    const {id, categoria, descripcion, precio, stock, imagen} = producto
  return (
    <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-2'>
      <div className="card">
        <img src={imagen} className="card-img-top" alt="..."></img>
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
    </div>
    
  )
}

export default Item

