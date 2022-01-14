
import React, {useState, useContext} from 'react'
import './Login.css';
import UserContext from '../../Context/UserContext';
import NotificationContext from '../../Context/NotificationContext'
import { useNavigate, Navigate  } from 'react-router-dom'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // bring the function "login()" from 'UserContext' and it is unstructured
    const { user, login } = useContext(UserContext)
    // bring the function "setNotification()" from 'NotificationContext' and it is unstructured
    const { setNotification } = useContext( NotificationContext ) 
    const navigate = useNavigate()

    const handleLogin = (event) => {

        event.preventDefault();

        const objUser = {
            username,
            password
        }

        login(objUser)
        setNotification(`Bienvenido ${objUser.username}`, 'success' )
        navigate('/')

    }

    // CHECK IF I HAVE USER OR NOT.
    if(user){
        return <Navigate to="/" replace={true} />
        // navigate('/')
    }

    return (
        <div className='container login__container'>

           

            <h2>Log In</h2>
            <form onSubmit={ handleLogin } className='login__form'>
                <label className='login__label'>
                    Usuario
                    <input 
                    className='login__input'
                    type="text"
                    value={ username }
                    onChange={({ target }) => { setUsername(target.value) }} />
                </label>
                <label className='login__label'>
                     Password
                    <input 
                    className='login__input'
                    type="password"
                    value={ password }
                    onChange={({ target }) => { setPassword(target.value)} } />
                </label>
                <div>
                    <button type='submit' className='btn btn-primary mt-3'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
