import React, { useState } from 'react'

// REFERENCE of the Context
const Context = React.createContext()

// EXPORT nombed
export const UserContextProvider = ({ children }) => {

    const [user, setUser ] = useState()

    const login = (objUser) => {
        setUser(objUser.username)
        window.localStorage.setItem('user', JSON.stringify(objUser))
    }

    const logout = () => {
        window.localStorage.removeItem('user');
        setUser()
    }

    return (
        <Context.Provider 
            value={{
                user, login, logout
            }}>
            {children}
        </Context.Provider>
    )
}

export default Context 