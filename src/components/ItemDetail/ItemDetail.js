import '../ItemDetail/ItemDetail.css'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import CartContext from '../CartContext/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, image, title, description, price, stock}) => {
    const [quantity, setQuantity] = useState(0)

    const { cart, setCart } = useContext(CartContext) //agarro los valores del context

    const handleAdd = (count) => {
        console.log(count)
        setQuantity(count)

        const productObj = {
            id, title, price,
        }

        setCart([...cart, {...productObj, quantity: count}])
    }

    return (
        <div className="detail p5">
            <img src={image} alt='productImg'/>
            <div className='detailInfo'>
                <h3>{title}</h3>
                <p className='detailInfoDescription altFont'>{description}</p>
                <p className='detailInfoPrice'>${price}</p>
                <p>Stock: {stock}</p>
            </div>
            {quantity > 0 ? <Link to='/carrito'>Ver el carrito</Link> : <ItemCount stock={stock} onAdd={handleAdd}/>}
        </div>
    )
}

export default ItemDetail