import { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../../Context/CartContext";
import './cartWidget.css';


function CartWidgetContainer() {

  const {getItemQty} = useContext(CartContext)

  return (
    <li className="nav-item">
      <Link to="/cart" className="nav-link">
        <div className="carrito">
          <i className="bi bi-cart icono"></i>
          {getItemQty() > 0 && <i className="numero">{getItemQty()}</i>}
        </div>
      </Link>
    </li>
  );
}

export default CartWidgetContainer;
