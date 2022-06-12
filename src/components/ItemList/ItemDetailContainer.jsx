import React from 'react'
import {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {
    const [producto, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(false);
  
    const arrayProductos = [ // si saco los [] para que quede solo como un objeto me tira error
      {
        id: 1,
        imagen: "img/diario-embarazo.jpeg",
        tipo: "Diario",
        descripcion: "Diario de embarazo y primer año del bebé con stickers en vinilo",
        precio: 2250,
        stock: 7
      },
    ]
  
    useEffect(() => {
      const productosPromise = new Promise((resolve, reject) => {
        setLoading(true)
        setTimeout(() => {
          resolve(arrayProductos);
        }, 2000);
      })
  
      productosPromise
        .then(result => {
          setProductos(result)
        })
        .catch(error => {
          setAlert(true)
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
        })
    }, []);
  
  console.log(producto)

    return (
      <>
       {
          loading ?
            <div className="d-flex align-items-center justify-content-center">
              <span className="me-4">Loading...</span>
              <div className="spinner-grow bg-gradient shadow-lg " role="status"></div>
            </div>
            :
            alert ?
              <div>Error</div>
              :
              <ItemDetail producto = {producto} />
        }
      </>
    );
    
}

export default ItemDetailContainer



