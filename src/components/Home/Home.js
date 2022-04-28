import { useState } from 'react'
import Carrousel from '../Carrousel/Carrousel'
import SliderBodegas from '../SliderBodegas/SliderBodegas'
import Alert from '../Alert/Alert'

const Home = () => {
    const [alert, setAlert] = useState(true)

    const alertStyles = {
        width: '100%',
        height: '100%',
        blur: alert ? '4px' : '0px',
        backgroundColor: alert ? 'green' : 'red'
    }

    return (
        <div>
            {alert ? 
            <Alert
            title={'OBTEN UN 5% OFF'} 
            description={'Suscríbete a nuestro Newsletter y obtene un 5% de descuento en tu primera compra.'}
            button={'Me Suscribo!'}
            extra={'Nunca le enviaremos SPAM, puede darse de baja en cualquier momento'}
            func={setAlert}
            styles={alertStyles}/>
            : null}
            <Carrousel/>
            <SliderBodegas/>
        </div>
    )
}

export default Home