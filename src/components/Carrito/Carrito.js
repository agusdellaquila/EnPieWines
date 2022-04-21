import '../Carrito/Carrito.css'
import { useContext } from 'react'
import CartItem from '../CartItem/CartItem'
import CartContext from '../CartContext/CartContext'



const Carrito = () => {
    const { cart, clearCart, getQuantity, getCartTotal, removeItem } = useContext(CartContext)

    return (
        <div className='contentContainer centered dFlexCol'>
            <h2>Carrito</h2>

            {getQuantity() === 0 ? <p className='altFont fwBold'>No hay nada en el carro aún</p> :
            <div> 
                <div className='mt5'>
                {cart.map( (item) => {
                    return <CartItem remove={removeItem} key={item.id} id={item.id} title={item.title} price={item.price} totalPrice={item.totalPrice} count={item.quantity} image={item.image}/>
                })}
                </div>

                <p>Total del carrito: <span className='totalPrice'>$ {getCartTotal()}</span></p>
    
                <div className='mt5'>
                <input className='carritoInput me3' placeholder='Código de cupón'></input>
                <button className='btn btnPrimary'> Aplicar cupón </button>
                </div>
    
                <button className='btn btnSecondary mt5' onClick={clearCart}>Vaciar Carrito</button>
            </div>
            }

        </div>
    )
}

export default Carrito