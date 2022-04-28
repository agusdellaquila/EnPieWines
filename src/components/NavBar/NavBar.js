import '../NavBar/NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection, query } from 'firebase/firestore'
import CartContext from '../CartContext/CartContext'
import logo from '../../logo.png';
import login from '../NavBar/UserLogInIcon.svg'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    const [categories, setCategories] = useState([])
    const { getQuantity } = useContext(CartContext)

    useEffect(() => {
        getDocs(query(collection(firestoreDb, 'categories'))).then(response => {
        const categories = response.docs.map(doc => {
            return { id: doc.id, ...doc.data()}
        })
        setCategories(categories)
        })
    }, [])

    return(
        <nav className="navContainer">
            <Link to="/">
                <img src={logo} className="navLogo" alt="enPie logo"/>
            </Link>

            <ul className="navItems">
                <li>
                    <NavLink to="/">Inicio</NavLink>
                </li>
                { categories.map(cat => 
                <li>
                    <NavLink key={cat.id} to={`/item/${cat.id}`}className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>{cat.description}</NavLink>
                </li>
                )}
            </ul>

            <Link to="/carrito" className="noUnderline"><CartWidget CartAmount={getQuantity}/></Link>

            <img src={login} className="loginIcon" alt="login"/>
        </nav>
    )
}

export default Navbar