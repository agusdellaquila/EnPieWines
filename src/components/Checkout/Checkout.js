import '../Checkout/Checkout.css'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import CheckoutCartView from '../CheckoutCartView/CheckoutCartView'


const Checkout = () => {
    return (
        <div className='checkoutContainer'>
            <CheckoutForm/>
            <CheckoutCartView/>
        </div>
    )
}

export default Checkout