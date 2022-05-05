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

    // const handleValidation = (objOrder) => {
    //     let fields = {...objOrder}
    //     let errors = {
    //         empty: '',
    //         onlyLetters: ''
    //     }
    //     let validForm = true;

    //     if ((fields['name'] === ' ') || (fields['surname'] === ' ') || (fields['email'] === ' ') || (fields['phone'] === ' ') || (fields['adressL1'] === ' ') || (fields['adressL2'] === ' ') || (fields['province'] === ' ') || (fields['city'] === ' ') || (fields['postalCode'] === ' ')) {
    //         validForm = false;
    //         errors['empty'] = 'Please leave no obligatory fields empty';
    //     }

    //     if ((typeof fields['name'] !== 'undefined') || (typeof fields['surname'] !== 'undefined') || (typeof fields['province'] !== 'undefined') || (typeof fields['city'] !== 'undefined')) {
    //         if ( (!fields['name'].match(/^[a-zA-Z]+$/)) || (!fields['surname'].match(/^[a-zA-Z]+$/)) || (!fields['province'].match(/^[a-zA-Z]+$/)) || (!fields['city'].match(/^[a-zA-Z]+$/))) {
    //             validForm = false;
    //             errors['onlyLetters'] = 'Please input only letters to the name, surname, province and city fields';
    //         }
    //     }

    //     if (fields['email']) {}

    //     console.log(errors)
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        // handleValidation(objOrder)
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
                        <label className="checkoutFont">Nombre de la empresa <span className="altFont fwNormal">(opcional)</span></label>
                        <input onChange={getInputValue} name="company" className="checkoutInput"></input>
                    </div>
                    <div className="Nombre">
                        <label className="checkoutFont">Nombre <span className='checkoutObligatory'>*</span></label>
                        <input onChange={getInputValue} name="name" type="text" className="checkoutInput"></input>
                    </div>
                    <div className="Apellido">
                        <label className="checkoutFont">Apellido <span className='checkoutObligatory'>*</span></label>
                        <input onChange={getInputValue} name="surname" type="text" className="checkoutInput"></input>
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
                        <input onChange={getInputValue} name="province" type="text" className="checkoutInput"></input>
                    </div>
                    <div className="Localidad">
                        <label className="checkoutFont">Localidad / Ciudad <span className='checkoutObligatory'>*</span></label>
                        <input onChange={getInputValue} name="city" type="text" className="checkoutInput"></input>
                    </div>
                    <div className="Correo">
                        <label className="checkoutFont">Correo electrónico<span className='checkoutObligatory'>*</span></label>
                        <input onChange={getInputValue} name="email" type="email" maxLength="50" className="checkoutInput"></input>
                    </div>
                    <div className="Telefono">
                        <label className="checkoutFont">Teléfono<span className='checkoutObligatory'>*</span></label>
                        <input onChange={getInputValue} name="phone" type="number" className="checkoutInput"></input>
                    </div>
                    <div className="CodigoPostal">
                        <label className="checkoutFont">Código postal <span className='checkoutObligatory'>*</span></label>
                        <input onChange={getInputValue} name="postalCode" type="number" className="checkoutInput"></input>
                    </div>

                    {/* <button className='purchaseBtn btn btnSecondary' onClick={() => createOrder(objOrder)} type="submit" value="Submit">Realizar pedido 🍷</button> */}
                    <button className='purchaseBtn btn btnSecondary' type="submit" value="Submit">Realizar pedido 🍷</button>
                </div>
            </form> 
        </div>
    )
}

export default CheckoutForm