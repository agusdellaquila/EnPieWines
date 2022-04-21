import '../CartItem/CartItem.css'

const CartItem = (props) => {
    return (
        <div className="cartItem p4">
            <img src={props.image} alt={props.title} width="60px" height="60px"></img>
            <p className="ms5">{props.title}</p>
            <p className='ms5 altFont fwBold'>x{props.count}</p>
            <p className="ms5 altFont">${props.totalPrice}</p>
            <img className='trashIcon' onClick={() => props.remove(props.id)} src="https://img.icons8.com/material-rounded/24/000000/trash.png" alt="trashIcon"/>
        </div>
    )
}

export default CartItem