import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./itemList.css";

import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

function ItemListContainer() {
  const {id} = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(false);

  
  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "productos");

    if (id){
      const q = query(productsCollection, where("categoria", "==", id ));
      
      getDocs(q).then(snapshot => {
        setProductos(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))  // esto es para unir el objeto de la db con el id que está por fuera en firestore
      })
      .catch((error) =>{
        setAlert(error);
      })
      .finally(() => {
        setLoading(false);
      });
    } else {
      getDocs(productsCollection).then(snapshot => {
        setProductos(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))  // esto es para unir el objeto de la db con el id que está por fuera en firestore
      })
      .catch((error) =>{
        setAlert(error);
      })
      .finally(() => {
        setLoading(false);
      });
      
    }

  }, [id]);


  return (
    <>
     {
        loading ?
          <div className="d-flex align-items-center justify-content-center">
            <span className="me-4">Cargando...</span>
            <div className="spinner-grow bg-gradient shadow-lg " role="status"></div>
          </div>
          :
          alert ?
            <div>Error</div>
            :
            <div className='container mt-5'>
              <div className='row'>
                <ItemList productos = {productos} />
              </div>
            </div>
            
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



    // const productosPromise = new Promise((resolve, reject) => {
    //   setLoading(true)
    //   setTimeout(() => {
    //     (!id) ? resolve(productosJson) : resolve(productosJson.filter(producto => producto.categoria === id))
    //   }, 2000);
    // })

    // productosPromise
    //   .then(result => {
    //     setProductos(result)
    //   })
    //   .catch(error => {
    //     setAlert(true)
    //     console.log(error)
    //   })
    //   .finally(() => {
    //     setLoading(false)
    //   })