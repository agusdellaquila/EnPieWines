import { useState } from 'react'
import '../ItemCount/ItemCount.css'

const ItemCount = ({onConfirm, stock, initial=1}) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) {
            setCount(count + 1) 
        }
    }

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    return (
        <div className="ItemCountContainer mt4">
            <div className="ItemCountPanel">
                <button onClick={decrement} className="btnCountMasMenos">-</button>
                <p>{count}</p>
                <button onClick={increment} className="btnCountMasMenos">+</button>
            </div>
            <div className="dividerLine"></div>
            <button onClick={() => onConfirm(count)} className="btn btnPrimary btnAddToCart">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount