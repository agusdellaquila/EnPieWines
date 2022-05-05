import { useState } from 'react'
import Carrousel from '../Carrousel/Carrousel'
import SliderBodegas from '../SliderBodegas/SliderBodegas'
import Alert from '../Alert/Alert'
import HomeBanners from '../HomeBanners/HomeBanners'
import Ofertas from '../Ofertas/Ofertas'

const Home = () => {
    const [alert, setAlert] = useState(true)

    return (
        <div className='navbarGap'>
            {alert ? 
            <Alert
            title={'OBTENÉ UN 5% OFF'} 
            description={'Suscríbete a nuestro Newsletter y obtene un 5% de descuento en tu primera compra.'}
            extra={'Nunca le enviaremos SPAM, puede darse de baja en cualquier momento'}
            funcAlert={setAlert}/>
            : null}
            <HomeBanners/>
            <Carrousel/>
            <Ofertas/>
            <p className='mt5 fs3 centered'>Nuestras Bodegas</p>
            <SliderBodegas/>
        </div>
    )
}

export default Home