import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore} from "firebase/firestore"

function ItemDetailContainer() {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const db = getFirestore();

    const productRef = doc(db, "products", id);
    
    getDoc(productRef).then((snapshot) => {
      setProducts({...snapshot.data(), id: snapshot.id});
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
        <ItemDetail products={products} />
      )}
    </>
  );
}

export default ItemDetailContainer;

