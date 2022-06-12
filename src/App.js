import './App.css';
import HeroContainer from './components/Hero/HeroContainer';
// import ItemCount from './components/ItemList/ItemCount';
import ItemDetailContainer from './components/ItemList/ItemDetailContainer';
// import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemListLayout from './components/ItemList/ItemListLayout';
import NavBar from './components/NavBar/NavBar';


function App() {


    
  return (
  <div>
    <NavBar />
    <ItemListLayout greeting="SOMOS FIODORA DISEÑO GRÁFICO" />

    <HeroContainer />
    <ItemDetailContainer />
  </div>
  );
}

export default App;


 /*
  const onAdd = (count) => {
    alert(`Agregastes ${count} productos al carrito`);
  }

    <ItemListContainer />
    <ItemCount inicial={1} stock={5} onAdd={onAdd}/>
 */
