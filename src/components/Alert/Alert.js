import '../Alert/Alert.css'

const Alert = ({title, description, extra, funcAlert }) => {
    return (
        <div>
            <div className="alert dFlexCol centered">
                <p className="fs5 mt3">{title}</p>
                <p className="fs5 altFont alertDescription centered">{description}</p>
                <p className='fs7 altFont'>{extra}</p>
                <button className='btn btnSecondary alertClose' onClick={() => {funcAlert(false)}}>X</button>
            </div>
        </div>
    )
}

export default Alert