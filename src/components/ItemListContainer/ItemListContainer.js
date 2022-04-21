import { useEffect, useState } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase';
import { useParams } from 'react-router-dom'
import NoContent from '../NoContent/NoContent'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const {category} = useParams();

    useEffect( () => {
        const collectionRef = category
        ? query(collection(firestoreDb, 'products'), where('category', '==', category))
        : collection(firestoreDb, 'products')

        getDocs(collectionRef).then( response => {
            const products = response.docs.map( doc => {
                return { id: doc.id, ...doc.data()}
            })
            setProducts(products)
        })
    }, [category])

    if (products.length == 0) {
        return <p className='fs4 centered'>No hay productos</p>
    }
    return (
        <div>
            {products.length > 0 ? <ItemList products={products} category={category}/> : <NoContent/>}
        </div>
    )
}

export default ItemListContainer