import { useState } from "react"
import '../ItemCount/ItemCount.css'

const ItemCount = (props) => {
    const [count, setCount] = useState(1) //inicializo en 1 el counter

    const incremento = () => {
        if (count < props.stock) {
            setCount(count + 1);
        }
    }

    const decremento = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <div className="ItemCountContainer mt4">
            <div className="ItemCountPanel">
                <button onClick={decremento} className="btnCountMasMenos">-</button>
                <p>{count}</p>
                <button onClick={incremento} className="btnCountMasMenos">+</button>
            </div>
            <div className="dividerLine"></div>
            <button onClick={() => {if(count <= props.stock && props.stock >= 1) {props.onAdd(count)}}} className="btn btnPrimary btnAddToCart">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount