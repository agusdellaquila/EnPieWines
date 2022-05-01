import { createContext, useState, useContext } from 'react'
import Notification from '../Notification/Notification'

//createContext
const NotificationContext = createContext()

export const NotificationProvider = ( { children } ) => {
    //state
    let [message, setMessage] = useState('') 
    let [severity, setSeverity] = useState('') 

    //funciones de logica
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