import '../Notification/Notification.css'

const Notification = ({message, severity}) => {
    if (message === '') {
        return (null)
    }
    return (
        <div className={`${severity === 'success' ? 'success' : severity === 'error' ? 'error' : 'warning'} notificationContainer centered`}>
            <p className="altFont fwBold fs5">{message}</p>
        </div>
    )
}

export default Notification