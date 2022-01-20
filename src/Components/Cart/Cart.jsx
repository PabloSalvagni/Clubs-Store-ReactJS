import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = () => {

    const { cart, getQuantity, removeProduct, clearCart } = useContext(CartContext)

    console.log('cart: ', cart)

    return (
        <article className='container p-5'>
            <h1 className='text-left cart__titulo'>Carrito de Compras</h1>

            {( getQuantity() !== 0)
                    
                    ?<div className='row'>
                        <div className='col col-md-7 p-4'>
                            <h4>PRODUCTOS ({ getQuantity() })</h4>
                            <div className='p-2'>
                                {cart.map ( e => {
                                    console.log(e.id)
                                    return  <div key={e.product.id} className='row item__container'>
                                                <div className='col-md-4 p-0'>
                                                    <img className="mx-auto d-block w-100 item__container--img" src={e.product.thumbnail} alt={e.product.title} />
                                                </div>
                                                <div className='col-md-7 item__container--info'>
                                                    <p className='item__container--info--titulo'>{ e.product.title }</p>
                                                    <p className='item__container--info--txt'>
                                                        {e.product.categoryType} • {e.product.category} <br />
                                                        Valor: ${e.product.price}<br />
                                                        Cantidad: { e.quantity }
                                                    </p>
                                                </div>
                                                <div className='col-md-1 text-center item__container--btns'>
                                                    <div className='item_click' onClick={ () => { removeProduct( e.product.id ) } }>
                                                        <i class="fas fa-times-circle fas-2x"></i>
                                                    </div>
                                                </div>
                                            </div>
                                })}
                             </div>
                            <div className='item_click'  onClick={ () =>{ clearCart() }} >Vaciar Carrito</div>
                        </div>
                        <div className='col col-md-5  p-4'>
                            Resumen de cuenta
                        </div>
                    </div>

                :<div>
                    <h3>No tiendas productos cargados en el carrito.</h3>
                    <Link to={'/'}>
                        <button type='button' className='btn btn-primary m-2'>Ir a Comprar</button>
                    </Link>
                </div>

            }
        </article>
    )
}

export default Cart
