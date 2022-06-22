import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

function Cart() {
  const { cart, getItemPrice, emptyCart, deleteItem } = useContext(CartContext);

  return (
    <div className="container top-navbar py-5">
      <div className="row">
        {cart.length > 0 ? (
          <>
            <div className="col-md-8">
              <table className="table table-striped text-center">
                <thead>
                  <tr>
                    <th>titulo</th>
                    <th>precio</th>
                    <th>cantidad</th>
                    <th>acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((element) => (
                    <tr key={element.id}>
                      <td>{element.descripcion}</td>
                      <td>{element.precio}</td>
                      <td>{element.count}</td>
                      <td><button onClick={() => {deleteItem(element.id)}}>X</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-md-4">
              <button className="btn btn-danger" onClick={() => {emptyCart()}}>vaciar carrito</button>
               <div>total a pagar {getItemPrice()}</div>
            </div>
          </>
        ) : (
          <div className="col-12 text-center">
            <h1>NO HAY ITEMS EN EL CARRITO</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
