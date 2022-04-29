import '../Carrito/Carrito.css'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import CartContext from '../CartContext/CartContext'


const Carrito = () => {
    const [loading, setLoading] = useState(false)

    const { cart, clearCart, getQuantity, getCartTotal, removeItem } = useContext(CartContext)

    if (loading) {
        return <h1>Se esta generando la orden</h1>
        //spinner
    }

    return (
        <div className='contentContainer centered dFlexCol'>
            <p className='fs3'>Carrito</p>

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

                <Link to='/checkout'>
                    <button className='btn btnSecondary mt5 ms5'>Finalizar compra</button>                
                </Link>
            </div>
            }

        </div>
    )
}

export default Carrito