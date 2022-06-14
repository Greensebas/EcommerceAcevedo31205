import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./itemList.css";
import productosJson from "../../json/productos.json"
import { useParams } from "react-router-dom";


function ItemListContainer() {
  const {id} = useParams();
  console.log(id);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  
  useEffect(() => {
    const productosPromise = new Promise((resolve, reject) => {
      setLoading(true)
      setTimeout(() => {
        (!id) ? resolve(productosJson) : resolve(productosJson.filter(producto => producto.categoria === id))
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
  }, [id]);


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
            <ItemList productos = {productos} />
      }
    </>
  );
}

export default ItemListContainer;


// ESTO ES PARA HACERLO CON FETCH Y TOMAR LOS PRODUCTOS DESDE EL .JSON

// function ItemListContainer() {
//   const [productos, setProductos] = useState([]);

//   useEffect(() => {
//     fetch("productos.json")
//       .then((res) => res.json())
//       .then((data) => setProductos(data))
//       .catch((err) => console.log(err));
//   }, []);



