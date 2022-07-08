import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { CartContext } from '../../Context/CartContext';
import "./form.css";

function FormCheckout({handleClick}) {
  const [send, setSend] = useState(false);
  const {emptyCart} = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
          cel: "",
        }}
        validate={(values) => {
          let error = {};

          // Validación nombre
          if (!values.nombre) {
            error.nombre = "Por favor ingrese su nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
            error.nombre =
              "El nombre solo puede contener letras y espacios hasta 40 caracteres";
          }

          // Validación correo
          if (!values.correo) {
            error.correo = "Por favor ingrese su correo electrónico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.correo
            )
          ) {
            error.correo = "Debe ingresar un correo electrónico válido";
          }

          // Validación teléfono
          if (!values.cel) {
            error.cel = "Por favor ingrese un teléfono de contacto";
          } else if (!/^[\d\s]{8,15}$/.test(values.cel)) {
            error.cel = "Debe ingresar un número telefónico";
          }

          return error;
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          handleClick(values);
          emptyCart();
          setSend(true);
          setTimeout(() => {
            setSend(false);
            navigate("/home");
          }, 5000);
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
