import '../CartWidget/CartWidget.css'
import CartIcon from '../CartWidget/CartIcon.svg'

const CartWidget = ({CartAmount}) => {
    return(
        <div className='dFlex'>
            <img src={CartIcon} className="cartIcon"/>
            <p className='cartAmount ms2 fwBold centered'>{CartAmount()}</p>
        </div>
    )
}

export default CartWidget