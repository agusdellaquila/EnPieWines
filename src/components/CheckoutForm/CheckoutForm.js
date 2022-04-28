import '../CheckoutForm/CheckoutForm.css'

const CheckoutForm = () => {
    return (
        <form className="checkoutFormContainer">
            <div className="container">
                <div className="Empresa">
                    <label className="checkoutFont">Nombre de la empresa <span className="altFont fwNormal">(opcional)</span></label>
                    <input className="checkoutInput"></input>
                </div>
                <div className="Nombre">
                    <label className="checkoutFont">Nombre <span className='checkoutObligatory'>*</span></label>
                    <input className="checkoutInput"></input>
                </div>
                <div className="Apellido">
                    <label className="checkoutFont">Apellido <span className='checkoutObligatory'>*</span></label>
                    <input className="checkoutInput"></input>
                </div>
                <div className="Pais">
                    <p className='checkoutFont'>País / Región <span className='checkoutObligatory'>*</span> <br/> Argentina</p>
                </div>
                <div className="Direccion">
                    <label className="checkoutFont">Dirección de la calle <span className='checkoutObligatory'>*</span></label>
                    <input className="checkoutInput"></input>
                    <input className="checkoutInput mt2"></input>
                </div>
                <div className="Provincia">
                    <label className="checkoutFont">Región / Provincia / Departamento <span className='checkoutObligatory'>*</span></label>
                    <input className="checkoutInput"></input>
                </div>
                <div className="Localidad">
                    <label className="checkoutFont">Localidad / Ciudad <span className='checkoutObligatory'>*</span></label>
                    <input className="checkoutInput"></input>
                </div>
                <div className="Correo">
                    <label className="checkoutFont">Correo electrónico<span className='checkoutObligatory'>*</span></label>
                    <input className="checkoutInput"></input>
                </div>
                <div className="Telefono">
                    <label className="checkoutFont">Teléfono<span className='checkoutObligatory'>*</span></label>
                    <input className="checkoutInput"></input>
                </div>
                <div className="CodigoPostal">
                    <label className="checkoutFont">Código postal <span className='checkoutObligatory'>*</span></label>
                    <input className="checkoutInput"></input>
                </div>
            </div>
        </form> 
    )
}

export default CheckoutForm