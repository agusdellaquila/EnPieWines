import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductsById } from '../asyncMock';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'

const ItemDetailContainer = () => {
    const [productsById, setProductId] = useState([])

    const {id} = useParams()

    useEffect( () => {
        getProductsById(id).then(productsById => {
            setProductId(productsById)
        }).catch(error => {
            console.log(error)
        })

        // return (() => {
        //     setProductId()
        // }) 
    }, [id])

    return (
        <div>
            {productsById ? <ItemDetail {...productsById}/> : <NotFound/>}
        </div>
    )
}

export default ItemDetailContainer