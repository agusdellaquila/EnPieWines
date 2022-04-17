import { Link } from 'react-router-dom'
import '../Item/Item.css'

const Item = (props) => {
    return (
        <div className="ItemCard ms2 me2">
            <img className='ItemImg' src={props.image} alt={props.title}></img>
            <h3>{props.title}</h3>
            <p>${props.price}</p>
            <Link to={`/detail/${props.id}`}>
                <button className="btn btnPrimary mt4">Ver mas</button>
            </Link>
        </div>
    )
}
export default Item