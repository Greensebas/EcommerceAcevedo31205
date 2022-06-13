import React from 'react'
import {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import productoJson from '../../json/producto.json'


function ItemDetailContainer() {
    const [producto, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(false);
  
  
    useEffect(() => {
      const productosPromise = new Promise((resolve, reject) => {
        setLoading(true)
        setTimeout(() => {
          resolve(productoJson);
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



