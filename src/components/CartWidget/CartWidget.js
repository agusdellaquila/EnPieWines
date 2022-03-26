import '../CartWidget/CartWidget.css'
import CartIcon from '../CartWidget/CartIcon.svg'

const CartWidget = () => {
    return(
        <div className='dFlex'>
            <img src={CartIcon} className="cartIcon"/>
            <p className='cartAmount ms2 fwBold centered'>6</p>
        </div>
    )
}

export default CartWidget