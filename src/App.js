import './Atoms.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer category="Whisky"/>
      <ItemListContainer category="Vino"/>
      <ItemListContainer category="Gin"/>
    </div>
  );
}

export default App;
