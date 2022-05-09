import { useEffect, useState } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase';
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner'

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

    if (products.length === 0) {
        return (
            <div className='navbarGap centered dFlexCol'>
                <p className='mb5 fs4 centered'>No hay productos</p>
                <Spinner/>
            </div>
        )
    }
    return (
        <div className='navbarGap'>
            <ItemList products={products} category={category}/>
        </div>
    )
}

export default ItemListContainer