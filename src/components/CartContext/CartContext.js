import { createContext, useState } from 'react'

//createContext
const CartContext = createContext()

export const CartContextProvider = ( { children } ) => {
    //state del cart array
    const [cart, setCart] = useState([]) 

    console.log(cart)

    console.log(cart)

    //funciones de logica del carro
    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd])
    }

    const isInCart = (id) => {
        return cart.some( prod => prod.id === id)
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach( prod => {
            count += prod.quantity //de donde saca la quantity?
        })
        return count
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
                isInCart,
                getQuantity,
                removeItem,
                clearCart
            }
        }>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext