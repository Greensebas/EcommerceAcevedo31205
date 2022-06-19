import "./itemDetail.css";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useState } from "react";

function ItemDetail({ producto }) {
  const [count, setCount] = useState(1);
  const [display, setDisplay] = useState(true);

  const sumar = () => {
    count < stock
      ? setCount(count + 1)
      : alert("No puedes agregar más productos");
  };

  const restar = () => {
    count > 1
      ? setCount(count - 1)
      : alert("No puedes solicitar menos de 1 producto");
  };

  const reset = () => {
    setCount(1);
  };

  const onAdd = (count) => {
    alert(`Agregaste ${count} productos al carrito`);
    setDisplay(false);
  };

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
            <img className="img-fluid w-100 pb-1" src={imagen} alt={categoria}/>
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
                  <Link to="/home"> Inicio </Link>
                </span>
                <span>
                  <Link to={`/categoria/${categoria}`}> {categoria} </Link>
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

            {display ? (
              <div className="count-container">
                <ItemCount
                  sumar={sumar}
                  restar={restar}
                  reset={reset}
                  count={count}
                  onAdd={onAdd}
                />
              </div>
            ) : (
              <div className="flex-cont">
                <div className="text-center">
                  <div className="card-body">
                    <div>
                      <Link to={`/cart`} className="boton boton-link">
                        <span className="span s1"></span>
                        <span className="span s2"></span>
                        <span className="span s3"></span>
                        <span className="span s4"></span>
                        Ir al carrito
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;

/*


*/
