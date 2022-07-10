import React from 'react'
import { Link } from 'react-router-dom'

function Item({product}) {
    const {id, description, price, stock, image} = product
  return (
    <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-2'>
      <div className="card shadow p-3 mb-5 bg-body rounded">
        <img src={image} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h4 className="card-title">{description}</h4>
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

