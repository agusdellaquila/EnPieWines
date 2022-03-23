import logo from '../../logo.png';
const Navbar = () => {
    return(
        <nav className="navContainer dFlex">
            <div className="centered ms2">
                <img src={logo} className="navLogo" alt="enPie logo"/>
            </div>
            
            <div className="navItemsContainer">
                <ul className="navItemsFather dFlex">
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
            </div>

            <div className='centered'>
                <button className="btn btnPrimary">Iniciar Sesion</button>
            </div>
        </nav>
    )
}

export default Navbar