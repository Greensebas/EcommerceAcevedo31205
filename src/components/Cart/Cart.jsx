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
                <tbody className="align-middle" >
                  {cart.map((element) => (
                    <tr key={element.id}>
                      <td>{element.description}</td>
                      <td>{element.price}</td>
                      <td>{element.count}</td>
                      <td>
                        <button className="btn btn-h" onClick={() => {deleteItem(element.id)}}>
                        <i className="bi bi-trash3"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tbody>

                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <span className="d-grid gap-2">
                        <button className="btn btn-outline-danger btn-cancel my-2" onClick={() => {emptyCart()}}>vaciar carrito</button>
                      </span>
                    </td>

                </tbody>
              </table>
            </div>
            
            <div className="col-md-4 bg-light">
              <div>
                <span className="h3 my-3 res">Resumen:</span>
               <div className="h5">Subtotal: $ {getItemPrice()}</div>
               <div className="h5">Costo de envío: $0</div>
               <hr />
               <div className="h2">Total a pagar: $ {getItemPrice()}</div>
              <span className='d-grid gap-2'>
                <Link to="/checkout" className="btn btn-outline-dark my-3"> Finalizar compra </Link>
              </span>
              </div>
              <div>

              </div>
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
