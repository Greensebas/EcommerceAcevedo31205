import CartWidgetContainer from "../CartWidget/CartWidgetContainer";
import {Link} from "react-router-dom";
import Categorias from "../Categorias/Categorias";


function NavBar() {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="navbar">
    <div className="container">
      <Link to="/home" className="navbar-brand">
        <img src="img/FIODORA-PNG.png" alt="" width="40" height="60"></img>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/home" className="nav-link">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/noticias" className="nav-link">Noticias</Link>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </span>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><Link to="/productos" className="dropdown-item">Ver todo en productos</Link></li>
              <Categorias />
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/contacto" className="nav-link">Contacto</Link>
          </li>
          <CartWidgetContainer />
        </ul>
      </div>
    </div>
  </nav>
  }
  
  export default NavBar;
