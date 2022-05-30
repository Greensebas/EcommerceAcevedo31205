import './App.css';
import HeroContainer from './components/Hero/HeroContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
  <div>
    <NavBar />
    <ItemListContainer />
    <HeroContainer />
  </div>
  );
}

export default App;
