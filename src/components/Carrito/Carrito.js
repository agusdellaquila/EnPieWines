import '../Carrito/Carrito.css'
import { useContext } from 'react'
import CartContext from '../CartContext/CartContext'



const Carrito = () => {
    const { cart } = useContext(CartContext)

    return (
        <div className='contentContainer centered dFlexCol'>
            <h2>Carrito</h2>

            <div>
                {/* {cart.map( (item) => {
                    let i;
                    for (i=0; i<cart.length; i++) {
                        return <p>{item[i].title} {item[i].quantity}</p> 
                    }
                })} */}
            </div>

            <div>
                <input className='carritoInput me3' placeholder='Código de cupón'></input>
                <button className='btn btnPrimary'> Aplicar cupón </button>
            </div>
        </div>
    )
}

export default Carrito