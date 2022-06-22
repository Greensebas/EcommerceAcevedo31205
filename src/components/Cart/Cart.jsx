import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

function Cart() {
  const { cart, getItemPrice, emptyCart, deleteItem } = useContext(CartContext);
  console.log(cart);
  console.log(cart.length)

  return (
    <>
    <div className="row">
      <hr />
      {cart.length > 0 ? (
        cart.map((element) => {
          return (
            <div key={element.id}>
              <div >
                <h2>{element.descripcion}</h2>
                <h3>{element.count}</h3>
                <button onClick={() => {deleteItem()}}>quitar item</button>
              </div>
              <button onClick={() => {emptyCart()}}>vaciar carrito</button>
              <div>total a pagar {getItemPrice()}</div>
            </div>
            
          );
        })
        
      ) : (
        <h1>NO HAY ITEMS EN EL CARRITO</h1>
      )}
    </div>
    </>
  );
}

export default Cart;
