import '../ItemList/ItemList.css'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <div className='ItemList'>
            {products.map( (prod) => (
                <Item key={prod.id} title={prod.title} price={prod.price} image={prod.image}/> 
            ))}
        </div>
    )
}
export default ItemList