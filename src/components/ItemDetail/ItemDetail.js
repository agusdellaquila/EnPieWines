import '../ItemDetail/ItemDetail.css'
const ItemDetail = ({image, title, description, price}) => {

    return (
        <div className="detail">
            <img src={image}/>
            <div className='detailInfo'>
                <h3>{title}</h3>
                <p className='detailInfoDescription'>{description}</p>
                <p className='detailInfoPrice'>${price}</p>
            </div>
        </div>
    )
}

export default ItemDetail