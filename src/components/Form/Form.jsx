import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./form.css";
import { useState } from "react";

function FormCheckout() {
  const [send, setSend] = useState(false);

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
            error.nombre =
              "El nombre solo puede contener letras y espacios hasta 40 caracteres";
          }

          // Validación correo
          if (!valores.correo) {
            error.correo = "Por favor ingrese su correo electrónico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
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
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("formulario enviado", valores);
          setSend(true);
          setTimeout(() => setSend(false), 5000);
        }}
      >
        {({ errors }) => (
          <div className="container top-navbar py-5">
            <div className="row">
              <Form className=" formulario">
                <div>
                  <label htmlFor="nombre">Nombre</label>
                  <Field
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Ingresa tu nombre y apellido"
                  />
                  <ErrorMessage
                    name="nombre"
                    component={() => (
                      <div className="error">{errors.nombre}</div>
                    )}
                  />
                </div>
                <div>
                  <label htmlFor="nombre">Mail</label>
                  <Field
                    type="text"
                    id="correo"
                    name="correo"
                    placeholder="Ingresa tu e-mail"
                  />
                  <ErrorMessage
                    name="correo"
                    component={() => (
                      <div className="error">{errors.correo}</div>
                    )}
                  />
                </div>
                <div>
                  <label htmlFor="cel">Cel</label>
                  <Field
                    type="text"
                    id="cel"
                    name="cel"
                    placeholder="Ingresa un teléfono de contacto"
                  />
                  <ErrorMessage
                    name="cel"
                    component={() => <div className="error">{errors.cel}</div>}
                  />
                </div>
                <button type="submit">TERMINAR COMPRA</button>
                {send && <p className="exito">Datos enviados con éxito</p>}
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default FormCheckout;
