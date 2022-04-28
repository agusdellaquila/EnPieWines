import { useContext } from 'react'
import CartContext from '../CartContext/CartContext'
import CartItem from '../CartItem/CartItem'

const CheckoutCartView = () => {
    const { cart } = useContext(CartContext)

    return (
        <div>
            <div className='mt5'>
                {cart.map( (item) => {
                    return <CartItem remove={null} key={item.id} id={item.id} title={item.title} price={item.price} totalPrice={item.totalPrice} count={item.quantity} image={item.image}/>
                })}
            </div>

        </div>
    )
}

export default CheckoutCartView