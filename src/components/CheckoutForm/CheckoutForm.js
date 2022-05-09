import '../CheckoutForm/CheckoutForm.css'
import { useContext, useState } from 'react';
import CartContext from '../CartContext/CartContext'
import Alert from '../Alert/Alert';
import Spinner from '../Spinner/Spinner';

const CheckoutForm = () => {
    const { cart, getCartTotal, createOrder, showOrderId, spinner } = useContext(CartContext)

    const [alert, setAlert] = useState(false)
    
    let objOrder = {
        items: cart,
        total: getCartTotal(),
        buyer: {
            country: 'Argentina',
        },
        date: new Date()

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createOrder(objOrder)
        setAlert(true)
    }

    const getInputValue = (e) => {
        e.preventDefault()
        objOrder.buyer = {...objOrder.buyer, [e.target.name]: e.target.value}
    }

    return (
        <div className='dFlexCol centered'>
            {alert ? 
                <Alert
                title={'Pedido realizado con éxito!'} 
                description={spinner() ? <Spinner/> : 'El id de su orden es: ' + showOrderId()}
                extra={'Gracias por su compra su pedido está siendo preparado'}
                funcAlert={setAlert}
                />
            : null}
            <p className='fs4 centered altFont fwBold'>Datos de compra</p>
            <form onSubmit={handleSubmit} className="checkoutFormContainer">
                <div className="container">
                    <div className="Empresa">
                        <label className="checkoutFont">Nombre de la empresa<span className="altFont fwNormal">(opcional)</span></label>
                        <input onChange={getInputValue} name="company" className="checkoutInput input"></input>
                    </div>
                    <div className="Nombre">
                        <label className="checkoutFont">Nombre<span className='checkoutObligatory'>*</span></label>
                        <input onChange={getInputValue} title='Ingresar solo letras' name="name" type="text" pattern='[A-Za-z]*' className="checkoutInput input"></input>
                    </div>
                    <div className="Apellido">
                        <label className="checkoutFont">Apellido<span className='checkoutObligatory'>*</span></label>
                        <input onChange={getInputValue} title='Ingresar solo letras' name="surname" type="text" pattern='[A-Za-z]*' className="checkoutInput input"></input>
                    </div>
                    <div className="Pais">
                        <p className='checkoutFont'>País / Región<span className='checkoutObligatory'>*</span> <br/> Argentina</p>
                    </div>
                    <div className="Direccion">
                        <label className="checkoutFont">Dirección de la calle<span className='checkoutObligatory'>*</span></label>
                        <input onChange={getInputValue} name="adressLine1" className="checkoutInput input"></input>
                        <input onChange={getInputValue} name="adressLine2" className="checkoutInput mt2 input"></input>
                    </div>
                    <div className="Provincia">
                        <label className="checkoutFont">Provincia<span className='checkoutObligatory'>*</span></label>
                        <input onChange={getInputValue} title='Ingresar solo letras' name="province" type="text" pattern='[A-Za-z]*' className="checkoutInput input"></input>
                    </div>
                    <div className="Localidad">
                        <label className="checkoutFont">Localidad / Ciudad<span className='checkoutObligatory'>*</span></label>
                        <input onChange={getInputValue} title='Ingresar solo letras' name="city" type="text" pattern='[A-Za-z]*' className="checkoutInput input"></input>
                    </div>
                    <div className="Correo">
                        <label className="checkoutFont">Correo electrónico<span className='checkoutObligatory'>*</span></label>
                        <input onChange={getInputValue} name="email" type="email" maxLength="50" className="checkoutInput input"></input>
                    </div>
                    <div className="Telefono">
                        <label className="checkoutFont">Teléfono<span className='checkoutObligatory'>*</span></label>
                        <input onChange={getInputValue} title='Ingresar solo numeros' name="phone" type="number" className="checkoutInput input"></input>
                    </div>
                    <div className="CodigoPostal">
                        <label className="checkoutFont">Código postal<span className='checkoutObligatory'>*</span></label>
                        <input onChange={getInputValue} title='Ingresar solo numeros' name="postalCode" type="number" className="checkoutInput input"></input>
                    </div>

                    <button className='purchaseBtn btn btnSecondary' type="submit" value="Submit">Realizar pedido 🍷</button>
                </div>
            </form> 
        </div>
    )
}

export default CheckoutForm