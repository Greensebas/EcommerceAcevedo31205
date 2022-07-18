# Fiodora DG

---
![](./public/gif/GIF%20ecommerce.gif)
---

## Cómo correr este proyecto:
#### El deploy de este proyecto se realizó en Firebase, podés ingresar y probarlo en el siguiente link:
https://acevedo31205.web.app/

#### Para correrlo de manera local podés seguir los siguientes pasos:
- Descargá el proyecto de este repositorio.
- Abrí el directorio del proyecto en tu editor de código favorito.
- Abrí la terminal para poder ingresar los siguientes comandos:
- - **npm install**
- - **npm start**
- Abrí http://localhost:3000 para verlo en tu navegador.

---

## Consideraciones
- Se creó un componente Error404 en caso de ingresar una ruta errónea.
- Se Realizó un control de stock desde el frontend, esto significa que no se modifica la base de datos, solo se valida que el pedido no sea mayor al stock disponible.
- Se realizó validación de formulario en el checkout.
- Se adjunta GIF del proyecto 

---

## Build
Este proyecto fue realizado con **React**, trayendo los productos de una base de datos ubicada en Firebase.

### Librerías utilizadas

- **React-router-dom:** Paquete para implementar routing dinámico en una web app. En este proyecto, utilizado para el routing. Añadilo a tu proyecto con:
```sh
npm add react-router-dom.
```
- **Bootstrap:** Librería que provee componentes de Bootstrap como componentes puros de React. En este proyecto, utilizada (entre otro lugares) en la Navbar y las card de producto. Añadilo a tu proyecto con: 
```sh
npm install bootstrap.
```
- **Formik:** Librería utilizada para para validación y funcionamiento de forms. En este proyecto, utilizada en el form de envío de pedido (checkout). Añadilo a tu proyecto con:
```sh
npm install formik --save
```
- **Bootstrap-icons:** Librería utilizada para añadir íconos. En este proyecto, utilizada para el ícono de Cart, Footer, Error404 y otros componentes. Añadilo a tu proyecto con:
```sh
npm i bootstrap-icons
```
- **Firebase:** Es un servicio provisto por Google para satisfacer las distintas necesidades que puede tener una aplicación y su ciclo de desarrollo
```sh
npm install firebase
```
- **React-toastify:** Librería utilizada para añadir alertas personalizadas. En este proyecto, utilizadas para avisar al usuario cuando intenta realizar una compra inválida (pedido mayor al stock, menor que 1, etcétera). Añadilas a tu proyecto con
```sh
npm install --save react-toastify
```

---

### Si encontraste algún error o tenés alguna sugerencia

##### Contactame a greensebas@hotmail.com