import React, { useState } from "react";

// References of my CONTEXT to bring with my setContext
const Context = React.createContext()

// PROVIDER to envolve the Application
export const NotificationContextProvider = ({children}) => {

    // Setup States.
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('')

    const setNotification = (message, severity) => {

        setMessage(message)
        setSeverity(severity)
        setTimeout( () => {
            setMessage('')
        }, 1000)

    }

    return (
        <Context.Provider value={{
            notification: {
                message,
                severity
            },
            setNotification
        }}>
            {children}
        </Context.Provider>
    )


}

export default Context 