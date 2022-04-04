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
            <h2 className='centered fs3'>{props.category}</h2>
            <ItemList products={products} category={props.category}/>
        </div>
    )
}

export default ItemListContainer