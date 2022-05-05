import { createContext, useState } from 'react'
import { getDocs, query, writeBatch, collection, where, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase';

//createContext
const CartContext = createContext()

export const CartContextProvider = ( { children } ) => {
    let [cart, setCart] = useState([]) 

    const [purchaseId, setPurchaseId] = useState('')

    const [loading, setLoading] = useState(true)

    const addItem = (productToAdd) => {
            setCart([...cart, productToAdd])
    }

    const agregarCantidad = (id, count) => {
        cart = cart.map( prod => {
            if (prod.id === id) {
                return {...prod, quantity: prod.quantity + count, totalPrice: ((prod.quantity + count)*prod.price)}
            } else return prod
        })
        setCart(cart)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach( prod => {
            count += prod.quantity
        })
        return count
    }

    const getCartTotal = () => {
        let sum = 0
        cart.forEach( prod => {
            sum += prod.totalPrice
        })
        return sum
    }

    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
    }

    const clearCart = () => {
        setCart([])
    }

    const spinner = () => {
        return loading
    }

    const showOrderId = () => {
        return purchaseId
    }

    const createOrder = (objOrder) => {
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
                //.id es el de la orden
                objOrder.buyer = {...objOrder.buyer, purchaseId: id}
                setPurchaseId(id)
                setLoading(false)
                batch.commit()
            }).catch(error => {
                console.log('ERROR')
            })
    }

    return (
        <CartContext.Provider value={ 
            {  
                cart,
                addItem,
                agregarCantidad,
                isInCart,
                getQuantity,
                getCartTotal,
                removeItem,
                clearCart,
                createOrder,
                showOrderId,
                spinner
            }
        }>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext