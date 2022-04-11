import './Atoms.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import SobreNosotros from './components/SobreNosotros/SobreNosotros'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
            <NavBar/>
            <Routes>
              <Route path='/' element={<Home/>}/>		
              <Route path='/item/:category' element={<ItemListContainer/>}/>
              <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
              <Route path='*' element={<NotFound/>}/>
              <Route path='/SobreNosotros' element={<SobreNosotros/>}/>	
            </Routes>

        </header>
        <main>

        </main>
        <footer>
          <Footer/>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
