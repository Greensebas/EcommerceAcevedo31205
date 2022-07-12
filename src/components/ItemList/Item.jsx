import React from 'react'
import { Link } from 'react-router-dom'
import './item.css';

function Item({product}) {
    const {id, description, price, stock, image} = product
  return (
    <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-2'>
      <div className="card shadow p-3 mt-3 bg-body rounded">
        <img src={image} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h4 className="card-title description">{description}</h4>
          <h5 className="card-text">Precio ${price}</h5>
          <p className="card-text">
              Disponibles: {stock}
          </p>
          <div className='d-grid gap-2'>
          <Link to={`/product/${id}`} className="btn btn-outline-dark">Ver detalle</Link>
          </div>
        </div>
    </div>
    </div>
    
  )
}

export default Item

