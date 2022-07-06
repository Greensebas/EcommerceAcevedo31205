import React from "react";
import { Formik } from "formik";
import "./form.css";

function Form() {
  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          email: "",
          cel: ""
        }}
        onSubmit={() => {
          console.log("formulario enviado")
        }}
      >
        {({values, handleSubmit, handleChange}) => (
          <div className="container top-navbar py-5">
            <div className="row">
              <form className=" formulario" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Ingresa tu nombre y apellido"
                    value={values.nombre}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="mail">Mail</label>
                  <input
                    type="text"
                    id="mail"
                    name="mail"
                    placeholder="Ingresa tu correo electrónico"
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="cel">Cel</label>
                  <input
                    type="text"
                    id="cel"
                    name="cel"
                    placeholder="Ingresa un teléfono de contacto"
                    value={values.cel}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit">TERMINAR COMPRA</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default Form;
