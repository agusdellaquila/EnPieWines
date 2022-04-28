import '../Carrito/Carrito.css'
import { useContext, useState } from 'react'
import { getDocs, query, writeBatch, collection, where, documentId, addDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import CartContext from '../CartContext/CartContext'
import { firestoreDb } from '../../services/firebase';


const Carrito = () => {
    const [loading, setLoading] = useState(false)

    const { cart, clearCart, getQuantity, getCartTotal, removeItem } = useContext(CartContext)

    const createOrder = () => {
        const objOrder = {
            items: cart,
            buyer: {
                name: 'Agustin DellAquila',
                phone: '1122342578',
                email: 'agusdellaquila12@gmail.com'
            },
            total: getCartTotal(),
            date: new Date(),
        }
        const ids = cart.map(prod => prod.id) //array de ids de productos que esten cargados en el carro
        const batch = writeBatch(firestoreDb)
        const collectionRef = collection(firestoreDb, 'products')
        const outOfStock = []
        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity
                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({id: doc.id, ...dataDoc})
                    }
                })
            }).then (() => {
                if (outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({name: 'outOfStockError', products: outOfStock})
                }
            }).then(({ id }) => {
                batch.commit()
                console.log('el ID de la orden es: ' + id)
            }).catch(error => {
                console.log('error')
            }).finally(() => {
                setLoading(false)
            })
    }

    if (loading) {
        return <h1>Se esta generando la orden</h1>
        //spinner
    }

    return (
        <div className='contentContainer centered dFlexCol'>
            <p className='fs3'>Carrito</p>

            {getQuantity() === 0 ? <p className='altFont fwBold'>No hay nada en el carro aún</p> :
            <div> 
                <div className='mt5'>
                {cart.map( (item) => {
                    return <CartItem remove={removeItem} key={item.id} id={item.id} title={item.title} price={item.price} totalPrice={item.totalPrice} count={item.quantity} image={item.image}/>
                })}
                </div>

                <p>Total del carrito: <span className='totalPrice'>$ {getCartTotal()}</span></p>
    
                <div className='mt5'>
                <input className='carritoInput me3' placeholder='Código de cupón'></input>
                <button className='btn btnPrimary'> Aplicar cupón </button>
                </div>
    
                <button className='btn btnSecondary mt5' onClick={clearCart}>Vaciar Carrito</button>

                <Link to='/checkout'>
                    <button className='btn btnSecondary mt5 ms5' onClick={() => createOrder()}>Finalizar compra 🍷</button>                
                </Link>
            </div>
            }

        </div>
    )
}

export default Carrito