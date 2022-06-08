import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./itemList.css";


function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  const arrayProductos = [
    {
      id: 1,
      imagen: "img/diario-embarazo.jpeg",
      tipo: "Diario",
      descripcion: "Diario de embarazo y primer año del bebé con stickers en vinilo",
      precio: 2250,
      stock: 7
    },
    {
      id: 2,
      imagen: "img/cuaderno-pediatrico.jpeg",
      tipo: "Cuaderno",
      descripcion: "Cuaderno pediátrico y libreta de vacunación",
      precio: 3550,
      stock: 5
    },
    {
      id: 3,
      imagen: "img/cuaderno-eventos.jpeg",
      tipo: "Cuaderno",
      descripcion: "Cuaderno de firmas y recuerdos para eventos",
      precio: 3500,
      stock: 10
    },
    {
      id: 4,
      imagen: "img/agenda-diaria-virgen.jpeg",
      tipo: "Agenda",
      descripcion: "Agenda diaria 2022 con stickers en vinilo",
      precio: 2800,
      stock: 7
    },
    {
      id: 5,
      imagen: "img/agenda-docente.jpeg",
      tipo: "Agenda",
      descripcion: "Agenda docente 2022 XL",
      precio: 2800,
      stock: 12
    },
    {
      id: 6,
      imagen: "img/agenda-astral.jpeg",
      tipo: "Agenda",
      descripcion: "Agenda astral 2022",
      precio: 2500,
      stock: 7
    },
    {
      id: 7,
      imagen: "img/diario-abuelos.jpeg",
      tipo: "Diario",
      descripcion: "Diario abuelos - Historia de nuestra familia",
      precio: 2450,
      stock: 10
    },
    {
      id: 8,
      imagen: "img/cuaderno-emprendedor.jpeg",
      tipo: "Cuaderno",
      descripcion: "Cuaderno emprendedor",
      precio: 5200,
      stock: 2
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



