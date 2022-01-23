import React, { useState, useContext } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import NotificationContext  from '../../Context/NotificationContext'
import CartContext  from '../../Context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ( { product }) => {
 
    const { setNotification } = useContext(NotificationContext)
    const [ quantity, setQuantity ] = useState(0)
    const { addItem } = useContext( CartContext )

    const addToCart = ( quantity ) => {
        if (quantity !== 0 ) {
            setQuantity( quantity )
            addItem( product, quantity)
            setNotification(`Agregado ${ quantity } unidades al carrito.`, 'success')
        }else{
            setNotification(`No hay unidades disponibles para agregar al carrito. Elija otro producto.`, 'error')
        }
    }

    return (
        <article>
             <div className='container p-5 m-3 backgroundDetail'>
                <div className='row justify-content-center'>

                    <div className='col col-md-6'>
                        <img className="card-img-top" src={product?.thumbnail} alt={product?.title} />
                    </div>

                    <div className='col col-md-6'>
                        <small> {product?.categoryType} • {product?.category}</small>
                        <h2> { product?.title } </h2>
                        <h3> $ {product?.price} </h3>
                        <p>  {product?.detail } </p>
                        <div>
                            <h3>Tabla de talles</h3>
                            <small>Proximamente</small>
                        </div>
                        <div>
                            {
                                quantity === 0
                                ? <ItemCount product={product} onAdd={(quantity) => addToCart (quantity)} />
                                :   <div className="card mt-3 mb-3">
                                        <div className="card-body text-center">
                                            <small>Agregados <b>{quantity}</b> item/s al carrito.</small><br />
                                            <Link to={'/cart'}>
                                                <button type="button" className="btn btn-primary m-2">Finalizar la Compra</button>
                                            </Link>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </article>
    )
}

export default ItemDetail
