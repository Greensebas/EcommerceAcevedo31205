import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./itemList.css";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const {id} = useParams();
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(false);

  
  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");

    if (id){
      const q = query(productsCollection, where("category", "==", id ));
      
      getDocs(q).then(snapshot => {
        setproducts(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))  // esto es para unir el objeto de la db con el id que está por fuera en firestore
      })
      .catch((error) =>{
        setAlert(error);
      })
      .finally(() => {
        setLoading(false);
      });
    } else {
      getDocs(productsCollection).then(snapshot => {
        setproducts(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))  // esto es para unir el objeto de la db con el id que está por fuera en firestore
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
            <div className='top-navbar container'>
              <div className='row'>
                <ItemList products = {products} />
              </div>
            </div>
            
      }
    </>
  );
}

export default ItemListContainer;

