import CartWidgetContainer from "./CartWidgetContainer";


function NavBar() {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="https://google.com">
        <img src="img/FIODORA-PNG.png" alt="" width="40" height="60"></img>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="https://google.com">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://google.com">Noticias</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="https://google.com" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="https://google.com">Ver todo en productos</a></li>
              <li><a className="dropdown-item" href="https://google.com">Agendas</a></li>
              <li><a className="dropdown-item" href="https://google.com">Fotolibros</a></li>
              <li><a className="dropdown-item" href="https://google.com">Abuelos</a></li>
              <li><a className="dropdown-item" href="https://google.com">Bebés</a></li>
              <li><a className="dropdown-item" href="https://google.com">Bautismos y comuniones</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://google.com">Contacto</a>
          </li>
        </ul>
      </div>
      <CartWidgetContainer />
    </div>
  </nav>
  }
  
  export default NavBar;
