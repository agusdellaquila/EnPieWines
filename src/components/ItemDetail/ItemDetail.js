import '../ItemDetail/ItemDetail.css'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { useNotification } from '../NotificationContext/NotificationContext'
import CartContext from '../CartContext/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, image, title, description, price, stock}) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem, isInCart, agregarCantidad } = useContext(CartContext)
    
    const { setNotification } = useNotification()

    const handleAdd = (count) => {
        setQuantity(count)

        if (isInCart(id)) {
            agregarCantidad(id, count)
            setNotification(`Agregado correctamente`, 'success')
        } else {         
            const productObj = {
                id, title, price, image
            }

            addItem({...productObj, quantity: count, totalPrice: (count*price)})
            setNotification(`Agregado correctamente`, 'success')
        }
    }

    return (
        <div className="detail">
            <div></div>
            <div>
                <img src={image} alt='productImg'/>
            </div>
            <div className='detailInfo'>
                <h3>{title}</h3>
                <p className='detailInfoDescription altFont'>{description}</p>
                <p className='altFont fwBold'>Stock: {stock}</p>
                <p className='detailInfoPrice'>${price}</p>
                {quantity > 0 ? <Link to='/carrito' className='noUnderline accentFontColor btnPrimary'><p className='fs5 p2'>Ver el carrito</p></Link> :  <ItemCount onConfirm={handleAdd} stock={stock}/>}
            </div>
            <div></div>
        </div>
    )
}

export default ItemDetail