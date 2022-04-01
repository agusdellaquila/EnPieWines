import { useState } from 'react';
import '../ItemListContainer/ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = (props) => {
    const [stockAmount, setStock] = useState(10);

    const onAddHandler = (count) => {
        alert('se agregaron ' + count + ' items al carro');
    }

    return (
        <div className='ItemListCard'>
            <h2 className="centered">{props.greeting}</h2>
            <img src={props.img} width='300px'></img>
            <ItemCount stock={stockAmount} onAdd={onAddHandler}></ItemCount>
        </div>
    )
}

export default ItemListContainer