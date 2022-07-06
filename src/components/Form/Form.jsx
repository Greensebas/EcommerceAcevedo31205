import React from "react";
import "./form.css";

function Form() {
  return (
    <>
      <div className="container top-navbar py-5">
        <div className="row">
          <form className=" formulario">
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ingresa tu nombre y apellido"
              />
            </div>
            <div>
              <label htmlFor="mail">Mail</label>
              <input
                type="email"
                id="mail"
                name="mail"
                placeholder="Ingresa tu correo electrónico"
              />
            </div>
            <div>
              <label htmlFor="cel">Cel</label>
              <input
                type="text"
                id="cel"
                name="cel"
                placeholder="Ingresa un teléfono de contacto"
              />
            </div>
            <button type="submit">TERMINAR COMPRA</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
