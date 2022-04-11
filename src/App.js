import './Atoms.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <div className="App">
      <header>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>		
            <Route path='/item/:category' element={<ItemListContainer/>}/>
            <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<NotFound/>}/> 
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
