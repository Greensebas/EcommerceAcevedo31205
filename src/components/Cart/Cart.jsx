import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import {Link} from 'react-router-dom';
import "./cart.css";

function Cart() {
  const { cart, getItemPrice, emptyCart, deleteItem } = useContext(CartContext);

  return (
    <div className="container top-navbar py-5">
      <div className="row">
        {cart.length > 0 ? (
          <>
            <div className="col-md-8 form-group">
              <table className="table text-center">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((element) => (
                    <tr key={element.id}>
                      <td>{element.description}</td>
                      <td>{element.price}</td>
                      <td>{element.count}</td>
                      <td>
                        <button className="btn" onClick={() => {deleteItem(element.id)}}>
                        <i className="bi bi-trash3"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-md-4 text-center">
              <button className="btn btn-danger" onClick={() => {emptyCart()}}>vaciar carrito</button>
               <div>Total a pagar: $ {getItemPrice()}</div>
              <span className="enlaces">
                <Link to="/checkout"> Finalizar compra </Link>
              </span>
            </div>
          </>
        ) : (
          <div className="col-12 text-center">
            <h1 className="vacio">¡Tu carrito está vacío!</h1>
            <h5 className="pregunta">¿No sabés qué comprar? Varios productos te esperan</h5>
            <span className="enlaces">
                <Link to="/home"> Click aquí! </Link>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
