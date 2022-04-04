import '../Item/Item.css'

const Item = (props) => {
    return (
        <div className="ItemCard ms2 me2">
            <img className='ItemImg' src={props.image} alt={props.title}></img>
            <h3>{props.title}</h3>
            <p>${props.price}</p>
            <button className="btn btnPrimary">Ver mas</button>
        </div>
    )
}
export default Item