import "./itemDetail.css";
import ItemDetailCount from './ItemDetailCount';
import {Link} from "react-router-dom";

function ItemDetail({ producto }) {
  
  console.log(producto);

  const onAdd = (count) => {
    alert(`Agregaste ${count} productos al carrito`);
  }

  const {
    categoria,
    descripcion,
    descripcionDetalle,
    precio,
    stock,
    imagen,
    imagen2,
    imagen3,
    imagen4,
  } = producto;

  return (
    <>
      <div className="container sproduct my-5 pt-5">
        <hr />
        <div className="row mt-5">
          <div className="col-lg-5 col-md-12 col-12">
            <img className="img-fluid w-100 pb-1" src={imagen} alt={categoria} />
            <div className="small-img-group">
              <div className="small-img-col">
                <img className="small-img w-100" src={imagen} alt={categoria} />
              </div>
              <div className="small-img-col">
                <img className="small-img w-100" src={imagen2} alt={categoria} />
              </div>
              <div className="small-img-col">
                <img className="small-img w-100" src={imagen3} alt={categoria} />
              </div>
              <div className="small-img-col">
                <img className="small-img w-100" src={imagen4} alt={categoria} />
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-12">
            <div>
              <div className="enlaces">
                <span>
                <Link to="/home">Inicio</Link>
                </span>
                <span>
                <Link to={`/categoria/${categoria}`}>{categoria}</Link>
                </span>
                <span>
                  <a href="x"> {descripcion} </a>
                </span>
              </div>
              <h1>{descripcion}</h1>
              <h2>$ {precio}</h2>
            </div>
            <h4>Detalle del producto</h4>
            <span>{descripcionDetalle}</span>
            <div className="count-container">
              <ItemDetailCount inicial={1} stock={stock} onAdd={onAdd}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;

// <ul>
//   <li>
//     <a href="">Home</a>
//   </li>
//   <li>
//     <a href="">Diarios</a>
//   </li>
//   <li>
//     <a href="">{descripcion}</a>
//   </li>
// </ul>
