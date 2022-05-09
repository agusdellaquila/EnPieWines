import '../ItemDetailContainer/ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase';
import { getDoc, doc } from 'firebase/firestore'
import NotFound from '../NotFound/NotFound'
import Spinner from '../Spinner/Spinner'

const ItemDetailContainer = () => {
    const [productsById, setProductId] = useState([])

    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect( () => {
        getDoc(doc(firestoreDb, 'products', id)).then(response => {
            const product = { id: response.id, ...response.data() }
            setProductId(product)
        })
    }, [id])

    if (loading) {
        setTimeout(() => {
            setLoading(false)
        }, 1250)
    return (<div className='navbarGap centered'><Spinner/></div>)
    }

    return (
        <div className="navbarGap detailContainer centered dFlexCol">
            {productsById ? <ItemDetail {...productsById}/> : <NotFound/>}
        </div>
    )
}

export default ItemDetailContainer