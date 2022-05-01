import { useState } from 'react'
import Carrousel from '../Carrousel/Carrousel'
import SliderBodegas from '../SliderBodegas/SliderBodegas'
import Alert from '../Alert/Alert'

const Home = () => {
    const [alert, setAlert] = useState(true)

    return (
        <div>
            {alert ? 
            <Alert
            title={'OBTENÉ UN 5% OFF'} 
            description={'Suscríbete a nuestro Newsletter y obtene un 5% de descuento en tu primera compra.'}
            extra={'Nunca le enviaremos SPAM, puede darse de baja en cualquier momento'}
            func={setAlert}/>
            : null}
            <Carrousel/>
            <SliderBodegas/>
        </div>
    )
}

export default Home