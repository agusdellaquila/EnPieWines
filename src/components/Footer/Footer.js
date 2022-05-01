import '../Footer/Footer.css'
import { Link } from 'react-router-dom'
import { useNotification } from '../NotificationContext/NotificationContext'
import Socials from '../Socials/Socials'

const Footer = () => {
    const { setNotification } = useNotification()
    //usar la noti para el emial
    return (
        <div className="footer mt5">
            <h3 className='t1'>En Pie</h3>
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
            <h3 className='t2'>Mi Cuenta</h3>
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
            <h3 className='t3'>Seguinos :)</h3>
            <div className='c3'>
                <section className='altFont'>
                    <Socials/> 
                    
                    <h5>Recibí nuestras ofertas!</h5>
                    
                    <input className='footerInput' placeholder='Ingresa tu Email'></input>
                </section>
            </div>
            <h3 className='t4'>Contáctenos</h3>
            <div className='c4'>
                <ul className='altFont'>
                    <li>
                        Contacto
                    </li>
                </ul>
                <section className='altFont'>
                    <p className='fs6 fwBold underline'>Estamos en:</p>
                    <p>Belaustegui 3395</p>

                    <p className='fs6 fwBold underline'>Horario de Atención:</p>
                    <p>Lunes a Viernes: 11 a 20 hs</p>
                    <p>Sábados: 11 a 14 y 17 a 20 hs</p>
                </section>
            </div>
        </div>
    )
}

export default Footer