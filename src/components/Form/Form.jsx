import React from "react";
import { Formik } from "formik";
import "./form.css";

function Form() {
  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
          cel: "",
        }}
        validate={(valores) => {
          let error = {};

          // Validación nombre
          if (!valores.nombre) {
            error.nombre = "Por favor ingrese su nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            error.nombre = "El nombre solo puede contener letras y espacios hasta 40 caracteres";
          }

          // Validación correo
          if (!valores.correo) {
            error.correo = "Por favor ingrese su correo electrónico";
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
            error.correo = "Debe ingresar un correo electrónico válido";
          }

          // Validación teléfono
          if (!valores.cel) {
            error.cel = "Por favor ingrese un teléfono de contacto";
          } else if (!/^[\d\s]{8,15}$/.test(valores.cel)) {
            error.cel = "Debe ingresar un número telefónico";
          }
          return error;
        }}
        onSubmit={() => {
          console.log("formulario enviado");
        }}
      >
        {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
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
                    onBlur={handleBlur}
                  />
                  {touched.nombre && errors.nombre && (
                    <div className="error">{errors.nombre}</div>
                  )}
                </div>
                <div>
                  <label htmlFor="nombre">Mail</label>
                  <input
                    type="text"
                    id="correo"
                    name="correo"
                    placeholder="Ingresa tu e-mail"
                    value={values.correo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.correo && errors.correo && (
                    <div className="error">{errors.correo}</div>
                  )}
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
                    onBlur={handleBlur}
                  />
                  {touched.cel && errors.cel && <div className="error">{errors.cel}</div>}
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
