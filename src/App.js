import './App.css';
import HeroContainer from './components/Hero/HeroContainer';
import ItemCount from './components/ItemList/ItemCount';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {

  const onAdd = (count) => {
    alert(`Agregastes ${count} productos al carrito`);
  }
    
  return (
  <div>
    <NavBar />
    <ItemListContainer />
    <ItemCount inicial={1} stock={5} onAdd={onAdd}/>
    <HeroContainer />
  </div>
  );
}

export default App;
