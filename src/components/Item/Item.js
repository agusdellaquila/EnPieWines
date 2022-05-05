import { Link } from 'react-router-dom'
import '../Item/Item.css'

const Item = (props) => {
    let offer = false

    if (props.offerStatus === true) {
        offer = true
    }
    return (
        <div className="ItemCard ms2 me2">
            <img className='ItemImg' src={props.image} alt={props.title}></img>
            <h3 className='itemTitle'>{props.title}</h3>
            <p className={offer ? 'offer' : ''}>${props.price}</p>
            {offer ? <p>${props.offerPrice}</p> : null}
            {offer ? <div className='offerSale fs5'>SALE</div> : null}
            <Link to={`/detail/${props.id}`}>
                <button className="btn btnPrimary">Ver más</button>
            </Link>
        </div>
    )
}
export default Item