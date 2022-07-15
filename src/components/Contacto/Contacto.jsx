import React from "react";
import './contacto.css'

function Contacto() {
  return (
    <div className="container">
      <div className="hello my-3 shadow">
        <div className="divMargin">
          <h1>"FIODORA DISEÑO GRÁFICO"</h1>
          <div className="text-center">
              <p className="h5">Contactanos!</p>
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
        </div>
      </div>
    </div>
  );
}

export default Contacto;
