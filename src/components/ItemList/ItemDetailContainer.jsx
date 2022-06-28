import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore} from "firebase/firestore"

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const db = getFirestore();

    const productRef = doc(db, "productos", id);
    
    getDoc(productRef).then((snapshot) => {
      setProducto({...snapshot.data(), id: snapshot.id});
    })
    .catch((error) => {
      setAlert(error);
    })
    .finally(() => {
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      {loading ? (
          <div className="d-flex align-items-center justify-content-center">
          <span className="me-4">Cargando...</span>
          <div className="spinner-grow bg-gradient shadow-lg " role="status"></div>
        </div>
      ) : alert ? (
        <div>Error</div>
      ) : (
        <ItemDetail producto={producto} />
      )}
    </>
  );
}

export default ItemDetailContainer;



    // const productoPromise = new Promise((resolve, reject) => {
    //   setLoading(true);
    //   setTimeout(() => {
    //     resolve(productosJson.find(producto => producto.id === id));
    //   }, 2000);
    // });

    // productoPromise
    //   .then((result) => {
    //     setProducto(result);
    //   })
    //   .catch((error) => {
    //     setAlert(true);
    //     console.log(error);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });