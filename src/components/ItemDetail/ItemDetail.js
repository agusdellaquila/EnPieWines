const ItemDetail = ({image, title, description, price}) => {

    return (
        <div>
            <img src={image}/>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default ItemDetail