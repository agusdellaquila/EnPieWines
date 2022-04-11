import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProductsByCategory } from '../asyncMock';
import { useParams } from 'react-router-dom'
import NoContent from '../NoContent/NoContent'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    const {category} = useParams();

    useEffect( () => {
        getProductsByCategory(category).then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [category])
    return (
        <div>
            {products.length > 0 ? <ItemList products={products} category={category}/> : <NoContent/>}
        </div>
    )
}

export default ItemListContainer