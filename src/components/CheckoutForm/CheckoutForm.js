import '../CheckoutForm/CheckoutForm.css'
import { useContext } from 'react';
import CartContext from '../CartContext/CartContext'

const CheckoutForm = () => {
    const { cart, getCartTotal, createOrder} = useContext(CartContext)
    
    let objOrder = {
        items: cart,
        total: getCartTotal(),
        date: new Date(),
        country: 'Argentina',
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(objOrder)
    }

    const getInputValue = (e) => {
        e.preventDefault()

        objOrder = {...objOrder, [e.target.name]: e.target.value}
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="checkoutFormContainer">
                <div className="container">
                    <div className="Empresa">
                        <label className="checkoutFont">Nombre de la empresa <span className="altFont fwNormal">(opcional)</span></label>
                        <input onChange={getInputValue} name="company" className="checkoutInput"></input>
                    </div>
                    <div className="Nombre">
                        <label className="checkoutFont">Nombre <span className='checkoutObligatory'>*</span></label>
                        <input onChange={getInputValue} name="name" className="checkoutInput"></input>
                    </div>
                    <div className="Apellido">
                        <label className="checkoutFont">Apellido <span className='checkoutObligatory'>*</span></label>
                        <input onChange={getInputValue} name="surname" className="checkoutInput"></input>
                    </div>
                    <div className="Pais">
                        <p className='checkoutFont'>País / Región <span className='checkoutObligatory'>*</span> <br/> Argentina</p>
                    </div>
                    <div className="Direccion">
                        <label className="checkoutFont">Dirección de la calle <span className='checkoutObligatory'>*</span></label>
                        <input onChange={getInputValue} name="adressLine1" className="checkoutInput"></input>
                        <input onChange={getInputValue} name="adressLine2" className="checkoutInput mt2"></input>
                    </div>
                    <div className="Provincia">
                        <label className="checkoutFont">Provincia <span className='checkoutObligatory'>*</span></label>
                        <input onChange={getInputValue} name="province" className="checkoutInput"></input>
                    </div>
                    <div className="Localidad">
                        <label className="checkoutFont">Localidad / Ciudad <span className='checkoutObligatory'>*</span></label>
                        <input onChange={getInputValue} name="city" className="checkoutInput"></input>
                    </div>
                    <div className="Correo">
                        <label className="checkoutFont">Correo electrónico<span className='checkoutObligatory'>*</span></label>
                        <input onChange={getInputValue} name="email" className="checkoutInput"></input>
                    </div>
                    <div className="Telefono">
                        <label className="checkoutFont">Teléfono<span className='checkoutObligatory'>*</span></label>
                        <input onChange={getInputValue} name="phone" className="checkoutInput"></input>
                    </div>
                    <div className="CodigoPostal">
                        <label className="checkoutFont">Código postal <span className='checkoutObligatory'>*</span></label>
                        <input onChange={getInputValue} name="postalCode" className="checkoutInput"></input>
                    </div>

                    <button className='btn btnSecondary mt5 ms5' onClick={() => createOrder(objOrder)} type="submit" value="Submit">Realizar pedido 🍷</button>
                </div>
            </form> 
        </div>
    )
}

export default CheckoutForm