import '../Footer/Footer.css'
import { Link } from 'react-router-dom'
import { useNotification } from '../NotificationContext/NotificationContext'
import Socials from '../Socials/Socials'

const Footer = () => {
    const { setNotification } = useNotification()

    const handleEmailSubmit = (e) => {
        if(e.key === 'Enter'){
            setNotification(`Gracias! Ahora recibirá las mejores ofertas en su email`, 'success')
        }
    }

    return (
        <div className="footer mt5">
            <p className='t1 fs6'>Navegación</p>
            <div className='c1'>
                <ul className='altFont'>
                    <li>
                        <Link to="/SobreNosotros">Sobre Nosotros</Link>
                    </li>
                    <li>
                        <Link to="/TerminosYCondiciones">Términos y condiciones</Link>
                    </li>
                    <li>
                        <Link to="/PoliticaDePrivacidad">Política de Privacidad</Link>
                    </li>
                    <li>
                        Preguntas Frecuentes
                    </li>
                    <li>
                        Bodegas
                    </li>
                </ul>
            </div>
            <p className='t2 fs6'>Mi Cuenta</p>
            <div className='c2'>
                <ul className='altFont'>
                    <li>
                        Mi cuenta
                    </li>
                    <li>
                        Contraseña perdida
                    </li>
                    <li>
                        Pedidos
                    </li>
                    <li>
                        <Link to="/carrito">Carrito</Link>
                    </li>
                    <li>
                        Finalizar la compra
                    </li>
                </ul>
            </div>
            <p className='t3 fs6'>Seguinos :)</p>
            <div className='c3'>
                <section className='altFont'>
                    <Socials/> 
                    
                    <p className='fwBold'>Recibí nuestras ofertas!</p>
                    
                    <input onKeyDown={handleEmailSubmit} className='footerInput' placeholder='Ingresa tu Email'></input>
                </section>
            </div>
            <p className='t4 fs6'>Contáctenos</p>
            <div className='c4'>
                <ul className='altFont'>
                    <li>
                        <Link to="/contacto">Contacto y ubicación</Link>
                    </li>
                </ul>
                <section className='altFont'>
                    <p className='fs6 fwBold underline'>Horario de Atención:</p>
                    <p>Lunes a Viernes: 11 a 20 hs</p>
                    <p>Sábados: 11 a 14 y 17 a 20 hs</p>
                </section>
            </div>
        </div>
    )
}

export default Footer