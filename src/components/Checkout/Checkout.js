import '../Checkout/Checkout.css'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import CheckoutCartView from '../CheckoutCartView/CheckoutCartView'


const Checkout = () => {
    return (
        <div className='navbarGap'>
            <p className='fs3 centered'>Checkout</p>
            <div className='checkoutContainer'>
                <div></div>
                <div>
                    <CheckoutCartView/>
                </div>
                <div>
                    <CheckoutForm/>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Checkout