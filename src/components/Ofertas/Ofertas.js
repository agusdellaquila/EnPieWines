import '../Ofertas/Ofertas.css'
import { useEffect, useState } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase';
import Item from '../Item/Item';

const Ofertas = () => {
    const [offerProducts, setOfferProducts] = useState([])

    const collectionRef = collection(firestoreDb, 'products')

    const getOfferProds = () => {
        getDocs(query(collectionRef, where('offer', '==', true)))
        .then(response => {
            const OfferProds = response.docs.map(doc => { 
                return { id: doc.id, ...doc.data() }
            })
            setOfferProducts(OfferProds)
        })
    }

    useEffect( () => {
        getOfferProds()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    if (offerProducts.length === 0) {
        return <p className='navbarGap fs4 centered'>No hay productos en oferta de momento</p>
    }

    return (
        <div className='offerContainer'>
            <p className='centered fs2'>OFERTAS</p>
            <div className='offerSubContainer mt4'>
                {offerProducts.map( (prod) => {
                    return <Item key={prod.id} id={prod.id} title={prod.title} price={prod.price} offerPrice={prod.offerPrice} offerStatus={true} image={prod.image}/>
                })}
            </div>
        </div>
    )
}

export default Ofertas