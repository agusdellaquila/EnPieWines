import '../CheckoutCartView/CheckoutCartView.css'
import { useContext } from 'react'
import CartContext from '../CartContext/CartContext'

const CheckoutCartView = () => {
    const { cart } = useContext(CartContext)

    return (
        <div className='dFlexCol centered'>
            <p className='fs4 centered altFont fwBold'>Resumen del carrito</p>
            {cart.map( (item) => {
                return (
                <div className='cartViewItem centered'>
                    <img src={item.image} alt={item.title} width="60px" height="60px"></img>
                    <p className="">{item.title}</p>
                    <p className='altFont fwBold'>x{item.quantity}</p>
                    <p className="altFont">${item.totalPrice}</p>
                </div>)
            })}
        </div>
    )
}

export default CheckoutCartView