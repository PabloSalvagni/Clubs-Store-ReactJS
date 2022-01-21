import React, {useEffect, useContext} from 'react';
// import {useState} from 'react';

import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer.jsx'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx'
import Notification from './Components/Notification/Notification';
import Cart from './Components/Cart/Cart'

// import ItemCount from './Components/ItemCount/ItemCount';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NotificationContextProvider } from './Context/NotificationContext';
import Login from './Components/Login/Login';
// import { UserContextProvider } from './Context/UserContext';
import UserContext from './Context/UserContext'
import { CartContextProvider } from './Context/CartContext';

const  App = () => {

  const { login } = useContext( UserContext )

  useEffect( () =>{
    const loggedUserJSON = window.localStorage.getItem('user');
    if(loggedUserJSON){
      const objUser =  JSON.parse(loggedUserJSON)
      login(objUser)
    }
  }, []) 

  return (
    <div className="container-fluid p-0">

      <CartContextProvider>
        <NotificationContextProvider>
          <BrowserRouter>
            <Navbar />
            <Notification />
            <Routes>
              <Route exact path="/" element={<ItemListContainer />} />
              <Route path="category/:categoryId" element={<ItemListContainer/>} />
              <Route path="detail/:paramId" element={<ItemDetailContainer/>} />
              <Route path="cart" element={<Cart/>} />
              <Route path='login' element={<Login/>} />
              <Route path="*" element={<h2 className='text-center'>Page not encontrada.</h2>}/>
            </Routes>
            <Footer /> 
          </BrowserRouter>
        </NotificationContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
