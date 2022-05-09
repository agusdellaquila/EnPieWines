import '../Carrito/Carrito.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import CartContext from '../CartContext/CartContext'


const Carrito = () => {
    const { cart, clearCart, getQuantity, getCartTotal, removeItem } = useContext(CartContext)

    return (
        <div className='navbarGap centered dFlexCol cartContainer'>
            <p className='fs3'>Carrito</p>

            {getQuantity() === 0 ? 
            <div className='centered dFlexCol'>
                <p className='altFont fwBold mt4'>No hay nada en el carro aún</p> 
                <Link className='mt4 referrer altFont fwBold' to='/'>
                    Agrega al carro tu mejor compañía para esta noche
                </Link>
            </div>
            :
            <div className='cartViewContainer'> 
                <div className='mt5'>
                {cart.map( (item) => {
                    return <CartItem remove={removeItem} key={item.id} id={item.id} title={item.title} price={item.price} totalPrice={item.totalPrice} count={item.quantity} image={item.image}/>
                })}
                </div>

                <p className='mt3'>Total: <span className='totalPrice'>$ {getCartTotal()}</span></p>
    
                <div className='mt5'>
                    <input className='carritoInput me3' placeholder='Código de cupón'></input>
                    <button className='btn btnPrimary'> Aplicar cupón </button>
                </div>
    
                <button className='btn btnSecondary mt5' onClick={clearCart}>Vaciar Carrito</button>

                <Link to='/checkout'>
                    <button className='btn btnSecondary btnFinalizar'>Finalizar compra</button>                
                </Link>
            </div>
            }

        </div>
    )
}

export default Carrito