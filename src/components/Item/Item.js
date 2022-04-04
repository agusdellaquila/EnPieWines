import '../Item/Item.css'

const Item = (props) => {
    return (
        <div className="ItemCard me5 mb5">
            <img src={props.image} alt={props.title}></img>
            <h3>{props.title}</h3>
            <p>${props.price}</p>
            <button className="btn btnPrimary">Ver mas</button>
        </div>
    )
}
export default Item