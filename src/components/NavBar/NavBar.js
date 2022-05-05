import '../NavBar/NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection, query } from 'firebase/firestore'
import CartContext from '../CartContext/CartContext'
import logo from '../../logo.png';
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    const [categories, setCategories] = useState([])
    const [navbarOpen, setNavbarOpen] = useState(false)
    const { getQuantity } = useContext(CartContext)

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    useEffect(() => {
        getDocs(query(collection(firestoreDb, 'categories'))).then(response => {
        const categories = response.docs.map(doc => {
            return { id: doc.id, ...doc.data()}
        })
        setCategories(categories)
        })
    }, [])

    const showCategories = (view) => {
        return (
            <ul className={`navItems ${view === 'desktopView' ? 'mobileHidden' : ''}`}>
                <li>
                    <NavLink key={'navHome'} to="/" onClick={() => setNavbarOpen(false)}>Inicio</NavLink>
                </li>
                { categories.map(cat => 
                <li>
                    <NavLink key={cat.id} to={`/item/${cat.id}`} onClick={() => setNavbarOpen(false)} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>{cat.description}</NavLink>
                </li>
                )}
            </ul>
        )
    }
    return(
        <div>
            <nav className="navContainer">
                <Link to="/">
                    <img src={logo} className="navLogo" alt="enPie logo"/>
                </Link>

                {navbarOpen ? null : showCategories('desktopView')}

                <Link to="/carrito" className="noUnderline"><CartWidget CartAmount={getQuantity}/></Link>

                <section onClick={handleToggle}>
                    {navbarOpen ? <img className='closeMenu desktopHidden' src="https://img.icons8.com/ios-filled/50/000000/delete-sign--v1.png" alt="burgerMenuIcon"/> : <img className='burgerMenu desktopHidden' src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png" alt="burgerMenuIcon"/>}   
                </section>
            </nav>
            <section className={navbarOpen ? "showMobileMenu" : ""}>
                {navbarOpen ? showCategories() : null}
            </section>
        </div>
    )
}

export default Navbar