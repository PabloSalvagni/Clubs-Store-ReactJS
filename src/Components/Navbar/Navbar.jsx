import React, {useState, useEffect, useContext} from 'react';
import './Styles.scss';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { Link } from 'react-router-dom';
import { getCategoryTypes } from '../../products.js'
import UserContext from '../../Context/UserContext'
import NotificationContext from '../../Context/NotificationContext'
import CartContext from '../../Context/CartContext'

import { db } from '../../Service/Firebase/Firebase'
import { collection, getDocs } from 'firebase/firestore';


const NavBar = () => {

    const [categoryTypes, setCategoryTypes] = useState([])
    const {user, logout } = useContext(UserContext)
    const {setNotification } = useContext (NotificationContext)
    const {cart, getQuantity} = useContext (CartContext)

    // Get the categoryTypes from products.js
    useEffect( () =>{
        getDocs((collection(db, 'categoryTypes'))).then(( querySnapshot ) => { 
            const categoryTypes = querySnapshot.docs.map( doc =>{
               return { id: doc.id, ...doc.data() }
            } )
            setCategoryTypes(categoryTypes)
        })
    }, [])
    
    const handleLogout = () => {
        logout();
        setNotification(`Hasta pronto ${user}`, 'error')
    }
    return ( 
    
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>
                    <h2>#MiTiendaDeClubes</h2>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item nav__item">
                            <Link to={'/'} className="nav-link active">Home</Link>
                        </li>  
                        
                        {/* LIST with method 'map' the categoryTypes get from useEff  */}
                        { categoryTypes.map (cat => <li key={cat.id} className="nav-item nav__item"> <Link className="nav-link" to={`/category/${cat.id}`}> {cat.Description}</Link></li>)}

                        {/* <li className="nav-item nav__item dropdown">
                            <Link to={'/'} className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Elige tu Club
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to={'/'}>Club Cobo</Link></li>
                                <li><Link className="dropdown-item" to={'/'}>Club Independinete</Link></li>
                                <li><Link className="dropdown-item" to={'/'}>Club El Tero</Link></li>
                                <li><Link className="dropdown-item" to={'/'}>Lefu Club</Link></li>
                            </ul>
                        </li> */}

                    </ul>
                    <span className="nav-item">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item nav__item">
                            {
                                // Check if the USER exist 
                                user ? 
                                <button onClick={handleLogout} className="nav-link nav__link--logout active">Hola { user } || Logout</button>
                                : <Link to={'login'} className="nav-link active">Login</Link>
                            }
                        </li> 
                        <li className='nav-item nav__item'>
                            {(getQuantity() !== 0) 
                                ?<Link to={'/cart'}>
                                    <CartWidget />
                                </Link>
                                :<div></div>
                            }
                        </li>
                    </ul>
                    </span>
                </div>
            </div>
        </nav>
    </header>
    )
}

export default NavBar
