import '../Footer/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer mt5">
            <h3>En Pie</h3>
            <h3>Mi Cuenta</h3>
            <h3>Contáctenos</h3>
            <h3>Seguinos :)</h3>

            <div>
                <ul className='altFont'>
                    <li>
                        Sobre Nosotros
                    </li>
                    <li>
                        Términos y condiciones
                    </li>
                    <li>
                        Política de Privacidad
                    </li>
                    <li>
                        Preguntas Frecuentes
                    </li>
                    <li>
                        Bodegas
                    </li>
                </ul>
            </div>

            <div>
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
                        Carrito
                    </li>
                    <li>
                        Finalizar la compra
                    </li>
                </ul>
            </div>

            <div>
                <ul className='altFont'>
                    <li>
                        <Link to="/SobreNosotros">Sobre Nosotros</Link>
                    </li>
                </ul>
                <section className='altFont'>
                    <h5>Estamos en:</h5>
                    <p>Belaustegui 3395</p>

                    <h5>Horario de Atención:</h5>
                    <p>Lunes a Viernes: 11 a 20 hs</p>
                    <p>Sábados: 11 a 14 y 17 a 20 hs</p>
                </section>
            </div>

            <div>
                <section className='altFont'>
                    <h5>Recibí nuestras ofertas!</h5>
                    
                    <input className='footerInput' placeholder='Ingresa tu Email'></input>
                </section>
            </div>
        </div>
    )
}

export default Footer