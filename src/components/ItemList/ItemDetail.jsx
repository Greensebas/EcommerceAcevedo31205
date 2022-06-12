import React from 'react'

function ItemDetail({producto}) {
    const {tipo, descripcion, precio, stock, imagen} = producto // si pongo un [0] me tira error... no se como acceder al objeto de ese array
    //console.log(producto)
  return (
    <>
      <div className="col-12 mb-5 text-center">
        <hr />
        <h3>Detalle del producto</h3>
        <small className="fs-6 text-secondary">texto secundario</small>
      </div>
          <div className="col-12 col-md-4">
            <img src={imagen} alt={tipo}  />
          </div>
      <div className="col-12 col-md-8">
        <h2>tipo</h2>
        <hr/>
        <p>{descripcion}</p>
        <p>{precio}</p>
        <cite>{stock}</cite>
        <div className="mt-3">
          NO SE QUE VA ACA
        </div>
      </div>
    </>
  )
}

export default ItemDetail