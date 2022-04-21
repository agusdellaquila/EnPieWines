import { createContext, useState } from 'react'

//createContext
const CartContext = createContext()

export const CartContextProvider = ( { children } ) => {
    //state del cart array
    let [cart, setCart] = useState([]) 

    //funciones de logica del carro
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
                clearCart
            }
        }>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext