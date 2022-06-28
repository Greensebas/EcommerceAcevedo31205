import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import ItemCount from "./ItemCount";
import "./itemDetail.css";

function ItemDetail({ producto }) {
  const [count, setCount] = useState(1);
  const [display, setDisplay] = useState(true);
  const {
    categoria,
    descripcion,
    descripcionDetalle,
    precio,
    stock,
    imagen,
  } = producto;
  
  const { addItem } = useContext(CartContext)
    

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

  const onAdd = () => {
    // alert(`Agregaste ${count} productos al carrito`);
    addItem(producto, count);
    reset();
    setDisplay(false);
  };


  return (
    <>
      <div className="container sproduct my-5 pt-5">
        <hr />
        <div className="row mt-5">
          <div className="col-lg-5 col-md-12 col-12">
            <img className="img-fluid w-100 pb-1" src={imagen} alt={categoria}/>
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
                  count={count}
                  onAdd={onAdd}
                />
              </div>
            ) : (
              <div className="flex-cont">
                <div className="text-center">
                  <div className="card-body">
                    <div>
                      <Link to={`/cart`}>
                        <button className="boton">
                          <span className="span s1"></span>
                          <span className="span s2"></span>
                          <span className="span s3"></span>
                          <span className="span s4"></span>
                          Ir al carrito
                        </button>
                          
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
