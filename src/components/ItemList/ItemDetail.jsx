import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import ItemCount from "./ItemCount";
import "./itemDetail.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemDetail({ products }) {
  const [count, setCount] = useState(1);
  const [display, setDisplay] = useState(true);
  const {
    category,
    description,
    descriptionDetail,
    price,
    stock,
    image
  } = products;
  
  const { addItem } = useContext(CartContext)

  const maxAdd = () => {
    toast.info('No puedes agregar más productos al carrito', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  const minAdd = () => {
    toast.info('No puedes agregar menos de 1 producto al carrito', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
    

  const add = () => {
    count < stock
      ? setCount(count + 1)
      : maxAdd();
  };

  const subtract = () => {
    count > 1
      ? setCount(count - 1)
      : minAdd();
  };

  const reset = () => {
    setCount(1);
  };

  const onAdd = () => {
    addItem(products, count);
    reset();
    setDisplay(false);
  };


  return (
    <>
      <div className="container sproduct my-5 pt-5">
        <hr />
        <div className="row mt-5">
          <div className="col-lg-5 col-md-12 col-12">
            <img className="img-fluid w-100 pb-1" src={image} alt={category}/>
          </div>

          <div className="col-lg-6 col-md-12 col-12">
            <div>
              <div className="enlaces">
                <span>
                  <Link to="/home"> Inicio /</Link>
                </span>
                <span>
                  <Link to={`/category/${category}`}> {category} /</Link>
                </span>
                <span>
                  <Link to={`/category/${category}`} > {description} </Link>
                </span>
              </div>
              <h1>{description}</h1>
              <h2>$ {price}</h2>
            </div>
            <h4>Detalle del producto</h4>
            <span>{descriptionDetail}</span>

            {display ? (
              <div className="count-container">
                <ItemCount
                  add={add}
                  subtract={subtract}
                  count={count}
                  onAdd={onAdd}
                />
              </div>
            ) : (
              <div className="flex-cont">
                    <div className="d-grid gap-2">
                      <Link to={`/cart`} className="btn btn-outline-dark">Ir al carrito</Link>
                      <Link to={`/home`} className="btn btn-outline-dark">Seguir comprando</Link>
                    </div>
              </div>
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default ItemDetail;

/*


*/
