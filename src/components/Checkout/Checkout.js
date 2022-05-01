import '../Checkout/Checkout.css'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import CheckoutCartView from '../CheckoutCartView/CheckoutCartView'


const Checkout = () => {
    return (
        <div>
            <p className='fs3 centered'>Checkout</p>
            <div className='checkoutContainer'>
                <div></div>
                <div>
                    <CheckoutForm/>
                </div>
                <div>
                    <CheckoutCartView/>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Checkout