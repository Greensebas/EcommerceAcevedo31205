import { createContext, useState, useEffect, useRef } from "react";
import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

const {Provider} = CartContext



const MyProvider = ({children}) => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('products')) ?? []);
    
    const toastId = useRef(null);

    const maxStock = (totalActual) => {
        if(! toast.isActive(toastId.current)) {
          toastId.current = toast(`Stock insuficiente, solo hay ${totalActual} unidades disponibles y ya están en tu carrito!`, {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
          transition: Zoom,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        }    
      }

    useEffect(() => {
            localStorage.setItem('products', JSON.stringify(cart));
      }, [cart]);

    // Metodo some que devuelve boolean - ItemDetail (detecta si el producto a agregar ya esta en el cart)
    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    // ItemDetail (se encarga de agregar el producto al cart sin pisar a los agregados anteriormente
    // si está duplicado solo aumenta la cantidad)
    const addItem = (product, count) => {
        const newItem = {
            ...product,
            count
        }

        if (isInCart(newItem.id)){
            const findProduct = cart.find(item => item.id === newItem.id);
            const productIndex = cart.indexOf(findProduct);
            const auxArray = [...cart];  //se crea una copia del estado, para poder modificarlo y despues reemplazar este array auxiliar al array cart
            const total = auxArray[productIndex].count; //se obtiene la cantidad actual del producto en el cart
            if(total >= newItem.stock) {
                maxStock(total); //si la cantidad actual es mayor a la cantidad maxima del producto, se muestra un msj de error y no se agrega nada
                return;
            }else{
            auxArray[productIndex].count += count; // si la cantidad actual es menor a la cantidad máxima del producto, se agrega el count a la cantidad actual
            setCart(auxArray); // se actualiza el estado con la copia del array
            }
        }else{
            setCart([...cart, newItem]);
        }
    };

    // Cart (vacía el carrito)
    const emptyCart = () => {
        setCart([]);
        localStorage.clear();
    };

    // Metodo filter - Cart (en funcion del ID retorna un nuevo array sin el producto seleccionado)
    const deleteItem = (id) => {
        return setCart(cart.filter(item => item.id !== id)) // retorna un array con todos los objetos que NO tengan ese id
    };

    // Metodo reduce - CartWidget (retorna la cantidad de unidades que tiene nuestro cart)
    const getItemQty = () => {
        return cart.reduce((acc, x) => acc += x.count, 0);
    };

    // Metodo reduce - Cart (retorna el precio total del carrito)
    const getItemPrice = () => {
        return cart.reduce((acc, x) => acc += x.count * x.price, 0)
    };


  return <Provider value={{cart, isInCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice}}>{children}</Provider>
}

export default MyProvider