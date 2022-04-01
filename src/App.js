import './Atoms.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import JackDaniels from './images/products/whisky/jackDaniels.png'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Jack Daniels'} img={JackDaniels}/>
    </div>
  );
}

export default App;
