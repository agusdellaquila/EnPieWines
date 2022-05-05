import '../SobreNosotros/SobreNosotros.css'
import logo from '../../logo.png';
import Socials from '../Socials/Socials'

const SobreNosotros = () => {
    return (
        <div className='navbarGap altContainer centered dFlexCol'>
            <h2 className="centered mt5">Sobre Nosotros</h2>

            <img src={logo} className="navLogo mt3 mb4" alt="enPie logo"/>

            <p className="snInfo altFont"> 
                En Pie Wines es una tienda de vinos y bebidas alcohólicas con un amplio catalogo de productos.
                Compartimos nuestra pasión por el vino para ayudarte a elegir tu vino perfecto en cada ocasión.
                Tanto si eres un aficionado, principiante o experto seguro que encuentras el vino ideal para vos.
            </p>
            <Socials/>
        </div>
    )
}

export default SobreNosotros