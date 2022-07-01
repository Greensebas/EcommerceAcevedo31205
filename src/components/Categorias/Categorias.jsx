import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore} from 'firebase/firestore'
import { Link } from 'react-router-dom'

function Categorias() {
    const [categoria, setCategoria] = useState([]);


    useEffect(() => {
        const db = getFirestore();
        const coleccionCategoria = collection(db, "categorias");
        
        getDocs(coleccionCategoria)
        .then((snapshot) => {
            setCategoria(snapshot.docs.map((doc) => doc.data().nombre));
        });
    }, [])
    
  return (
    <>
    {
        categoria.map((el) =>(
            <li key={el}>
                <Link to={"/categoria/" + el} className="dropdown-item">{el}</Link>
            </li>
        ) )
    }
    </>
  )
}

export default Categorias