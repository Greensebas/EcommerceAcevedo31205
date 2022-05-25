function NavBar() {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="google.com">
        <img src="img/wapp.png" alt="" width="50" height="56"></img>Brand
      </a>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="google.com">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="google.com">Noticias</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="google.com" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="google.com">Producto 1</a></li>
              <li><a className="dropdown-item" href="google.com">Producto 2</a></li>
              <li><a className="dropdown-item" href="google.com">Producto 3</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="google.com">Contacto</a>
          </li>
        </ul>
      </div>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
        <button class="btn btn-outline-secondary" type="submit">Buscar</button>
      </form>
    </div>
  </nav>
  }
  
  export default NavBar;
  
    