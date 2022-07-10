import React from 'react'
import { Link } from 'react-router-dom'

function Item({product}) {
    const {id, description, price, stock, image} = product
  return (
    <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-2'>
      <div className="card">
        <img src={image} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h2 className="card-title">{description}</h2>
          <h5 className="card-text">Precio ${price}</h5>
          <p className="card-text">
              Stock: {stock}
          </p>
          <Link to={`/product/${id}`} className="btn btn-primary">Ver detalle</Link>
        </div>
    </div>
    </div>
    
  )
}

export default Item

