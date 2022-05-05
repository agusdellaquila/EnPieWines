import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase';
import { getDoc, doc } from 'firebase/firestore'
import NotFound from '../NotFound/NotFound'

const ItemDetailContainer = () => {
    const [productsById, setProductId] = useState([])

    const {id} = useParams()

    useEffect( () => {
        getDoc(doc(firestoreDb, 'products', id)).then(response => {
            const product = { id: response.id, ...response.data() }
            setProductId(product)
        })
    }, [id])

    return (
        <div className="navbarGap detailContainer">
            {productsById ? <ItemDetail {...productsById}/> : <NotFound/>}
        </div>
    )
}

export default ItemDetailContainer