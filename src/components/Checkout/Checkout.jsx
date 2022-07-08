import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import FormCheckout from "../Form/FormCheckout";



function Checkout() {
  const [buyId, setBuyId] = useState("");
  const {cart, getItemPrice} = useContext(CartContext);

  const db = getFirestore();
  const orderCollection = collection(db, "orders");

  
  const handleClick = ({nombre, correo, cel}) => {
    
    const order = {
      buyer: {nombre:nombre, correo:correo, cel:cel},  // el objeto buyer tuve que armarlo así porque por alguna razon no podía usar
      items: cart,                                     // useState para setear el buyer con la info del formulario con Formik
      total: getItemPrice()
    };

    // guardar en la base de datos
    addDoc(orderCollection, order).then(({id}) => {
      setBuyId(id)
    })

  }

  return (
    <>
    <FormCheckout handleClick={handleClick}/>
    <div>
      {(buyId !== ("")) && <h2>Numero de órden: {buyId}</h2>}
    </div>
    </>
  );
}

export default Checkout;



