import React from "react";

function Footer() {
  return (
    <>
    <div className="container-fluid bg-light p-5">
      <div className="container">
      <div className="row ">
            <div className="col-xs-12 col-md 6 col-lg-3 text-center">
              <img src="img/FIODORA-PNG.png" alt="" width="60" height="90"></img>
              <p className="h6">DISEÑO GRÁFICO</p>
            </div>
            <div className="col-xs-12 col-md 6 col-lg-3">
              <p className="h5">Productos</p>
            </div>
            <div className="col-xs-12 col-md 6 col-lg-3">
              <p className="h5">Contacto</p>
            </div>
            <div className="col-xs-12 col-md 6 col-lg-3">
              <p className="h5">Columna</p>
            </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
