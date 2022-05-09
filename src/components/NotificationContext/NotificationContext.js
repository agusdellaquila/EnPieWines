import { createContext, useState, useContext } from 'react'
import Notification from '../Notification/Notification'

const NotificationContext = createContext()

export const NotificationProvider = ( { children } ) => {
    let [message, setMessage] = useState('') 
    let [severity, setSeverity] = useState('') 

    const setNotification = (message, severity) => {
        setMessage(message)
        setSeverity(severity)
        setTimeout(() => {
            setMessage('')
        }, 3000)
    }

    return (
        <NotificationContext.Provider value={ {setNotification} }>
            <Notification message={message} severity={severity}/>
            { children }
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}