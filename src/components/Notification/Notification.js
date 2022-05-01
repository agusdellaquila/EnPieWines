import '../Notification/Notification.css'

const Notification = ({message, severity}) => {
    if (message === '') {
        return (null)
    }
    
    return (
        <div className={`${severity === 'success' ? 'success' : severity === 'error' ? 'error' : 'warning'} notificationContainer`}>
            <p className="altFont fwBold">{message}</p>
        </div>
    )
}

export default Notification