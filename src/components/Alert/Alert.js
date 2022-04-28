import '../Alert/Alert.css'

const Alert = ({title, description, button, extra, func, styles}) => {
    return (
        <div style={styles}>
            <div className="alertContainer dFlexCol centered">
                <p className="fs5">{title}</p>
                <p className="fs5 altFont alertDescription">{description}</p>
                <div className='dFlex'>
                    <input placeholder='Ingrese su email'></input>
                    <button className='btn btnSecondary'>{button}</button>
                </div>
                <p className='fs7 altFont'>{extra}</p>
                <button className='btn btnSecondary alertClose' onClick={() => {func(false)}}>X</button>
            </div>
        </div>
    )
}

export default Alert