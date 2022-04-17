import '../Carrito/Carrito.css'

const Carrito = () => {
    return (
        <div className='contentContainer centered dFlexCol'>
            <h2>Carrito</h2>

            <div>
                <input className='carritoInput me3' placeholder='Código de cupón'></input>
                <button className='btn btnPrimary'> Aplicar cupón </button>
            </div>
        </div>
    )
}

export default Carrito