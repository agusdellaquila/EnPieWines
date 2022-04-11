import '../ItemList/ItemList.css'
import Item from '../Item/Item'

const ItemList = ({products, category}) => {
    return (
        <div>
            <h2 className='centered fs3'>{category.toUpperCase()}</h2>
            <div className='ItemList'>
                {products.map( (prod) => {
                    return <Item key={prod.id} id={prod.id} title={prod.title} price={prod.price} image={prod.image}/> 
                })}
            </div>
        </div>
    )
}
export default ItemList