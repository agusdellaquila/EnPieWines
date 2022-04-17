import '../NavBar/NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../logo.png';
import login from '../NavBar/UserLogInIcon.svg'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return(
        <nav className="navContainer">
            <Link to="/">
                <img src={logo} className="navLogo" alt="enPie logo"/>
            </Link>

            <ul className="navItems">
                <li>
                    <NavLink to="/">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/item/vino">Vinos</NavLink>
                </li>
                <li>
                    <NavLink to="/item/champagne">Champagne</NavLink>
                </li>
                <li>
                    <NavLink to="/item/cerveza">Cervezas</NavLink>
                </li>
                <li>
                    <NavLink to="/item/whisky">Whisky</NavLink>
                </li>
                <li>
                    <NavLink to="/item/gin">Gin</NavLink>
                </li>
            </ul>

            <Link to="/carrito"><CartWidget CartAmount="6"/></Link>

            <img src={login} className="loginIcon"/>
        </nav>
    )
}

export default Navbar