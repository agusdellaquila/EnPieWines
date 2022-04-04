import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../asyncMock';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect( () => {
        getProducts().then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    })
    return (
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer