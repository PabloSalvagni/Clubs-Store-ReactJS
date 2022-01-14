import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import './Cart.css'

const Cart = () => {


    const { cart, getQuantity, removeProduct } = useContext(CartContext)
    
    const handleClick = (evt) => {
        evt.stopPropagation()
        console.log('handleClick');
    } 

    return (
        <article className='container p-5'>
            <h1 className='text-left cart__titulo'>Tu Carrito</h1>

            <div className='row'>             
                
                <div className='col col-md-7 p-4'>
                    <h4>PRODUCTOS ({ getQuantity() })</h4>
                    <div className='p-2'>
                        
                            {cart.map ( element => {
                                console.log(element.product.title)
                                return  <div className='row item__container'>
                                            <div className='col-md-4 p-0'>
                                                <img className="mx-auto d-block w-100 item__container--img" src={element.product.thumbnail} alt={element.product.title} />
                                                
                                            </div>
                                            <div className='col-md-7 item__container--info'>
                                                <p className='item__container--info--titulo'>{ element.product.title }</p>
                                                <p className='item__container--info--txt'>
                                                    {element.product.categoryType} • {element.product.category} <br />
                                                    Valor: ${element.product.price}<br />
                                                    Cantidad: { element.quantity }
                                                </p>
                                            </div>
                                            <div className='col-md-1 text-center item__container--btns'>
                                                <div className='item_click' onClick={ handleClick }>
                                                    <i class="fas fa-times-circle fas-2x"></i>
                                                </div>
                                            </div>
                                        </div>
                            })}
                        
                    </div>
                </div>
                
                <div className='col col-md-5  p-4'>
                    Resumen de cuenta
                </div>

            </div>

        </article>
    )
}

export default Cart
