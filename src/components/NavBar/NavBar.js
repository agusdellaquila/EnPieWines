import '../NavBar/NavBar.css'
import logo from '../../logo.png';
import login from '../NavBar/UserLogInIcon.svg'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return(
        <nav className="navContainer">
            <img src={logo} className="navLogo" alt="enPie logo"/>

            <ul className="navItems">
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Vinos</a>
                </li>
                <li>
                    <a href="#">Champagne</a>
                </li>
                <li>
                    <a href="#">Cervezas</a>
                </li>
                <li>
                    <a href="#">Whisky</a>
                </li>
                <li>
                    <a href="#">Spirits</a>
                </li>
            </ul>

            <CartWidget/>

            <img src={login} className="loginIcon"/>
        </nav>
    )
}

export default Navbar