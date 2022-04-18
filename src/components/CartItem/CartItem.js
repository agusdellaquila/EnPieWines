import '../CartItem/CartItem.css'

const CartItem = (props) => {
    console.log(props.image)
    return (
        <div className="cartItem centered p4">
            <img src={props.image} alt={props.title} width="60px" height="60px"></img>
            <p className="ms5">{props.title}</p>
            <p className='ms5 altFont fwBold'>x{props.count}</p>
            <p className="ms5 altFont">${props.totalPrice}</p>
        </div>
    )
}

export default CartItem