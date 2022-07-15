import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-light p-5">
        <div className="container">
          <div className="row ">
            <div className="col-xs-12 col-md 6 col-lg-3 text-center">
              <img
                src="img/FIODORA-PNG.png"
                alt=""
                width="60"
                height="90"
              ></img>
              <p className="h6">DISEÑO GRÁFICO</p>
            </div>
            <div className="col-xs-12 col-md 6 col-lg-3">
              <p className="h5">Productos</p>
              <span>
                <Link to="/products" className="dropdown-item">
                  Ver todo en productos
                </Link>
              </span>
              <span>
                <Link to="/category/Diarios" className="dropdown-item">
                  Diarios
                </Link>
              </span>
              <span>
                <Link to="/category/Agendas" className="dropdown-item">
                  Agendas
                </Link>
              </span>
              <span>
                <Link to="/category/Cuadernos" className="dropdown-item">
                  Cuadernos
                </Link>
              </span>
            </div>
            <div className="col-xs-12 col-md 6 col-lg-3">
              <p className="h5">Contacto</p>
              <span>
                <a href="sms:2325592036" className="dropdown-item">
                  <i className="bi bi-whatsapp dspl me-2"></i>
                  <p className="dspl">+54 9 2325 592036</p>
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/fiodora_dg/"
                  className="dropdown-item"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="bi bi-instagram dspl me-2"></i>
                  <p className="dspl">fiodora_dg</p>
                </a>
              </span>
              <span>
                <a
                  href="https://www.facebook.com/Fiodora-1502130800094570"
                  className="dropdown-item"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="bi bi-facebook dspl me-2"></i>
                  <p className="dspl">Fiodora</p>
                </a>
              </span>
              <span>
                <a
                  href="mailto:martinasalaberry1@gmail.com"
                  className="dropdown-item"
                >
                  <i className="bi bi-envelope icon dspl me-2"></i>
                  <p className="dspl">martinasalaberry1@gmail.com</p>
                </a>
              </span>
            </div>
            <div className="col-xs-12 col-md 6 col-lg-3">
              <p className="h5">Desarrollo</p>
              <span className="dev">Desarrollado por Sebastián Acevedo</span>
              <span>
                <a
                  href="https://github.com/Greensebas"
                  className="dropdown-item"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i class="bi bi-github dspl me-2"></i>
                  <p className="dspl">Greensebas</p>
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/sebastian-acevedo-929b2315/"
                  className="dropdown-item"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i class="bi bi-linkedin dspl me-2"></i>
                  <p className="dspl">Sebastián Acevedo</p>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
