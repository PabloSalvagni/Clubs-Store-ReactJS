import React, { useState, useContext } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import NotificationContext  from '../../Context/NotificationContext'
import CartContext  from '../../Context/CartContext'
import { Link } from 'react-router-dom'


// ItemCount WITH Input Text
/*
const InputCount = ( {onConfirm, maxQuantity } ) => {

    const [count, setCount ] = useState(0)
    const handleChange = ( {target} ) => {
        if(target.value <= maxQuantity && target.value >= 0){
            setCount(target.value)
        }
    }

    return (
        <div className="card mt-3 mb-3 w-50">
            <div className="card-body">
                <input type="number" className='text-center w-100' onChange={ handleChange} value={count} />
                <button type="button" className="btn btn-primary mt-3 mb-3 w-100" onClick={ () => onConfirm(count) }>Agregar al Carrito</button>
            </div>
        </div>
    )
}
*/

// ItemCount WITH add and remove buttons.
/*
const ButtonCount = ( { onConfirm, maxQuantity } ) => {

    const [count, setCount] = useState(0)
    
    const addProduct = () =>{
        if(count < maxQuantity){
            setCount( count + 1 )
        }
    }

    const remProduct = () =>{
        if(maxQuantity > 0){
            setCount( count - 1 )
        }
    }  
    

    return (

        <div className="card mt-3 mb-3">
            <div className="card-body text-center">
                <div className='text-center'>
                    <button type="button" className="btn btn-secondary m-2" onClick={remProduct}>-</button>
                    <input type="text" value={count} className='w-25 text-center'/>
                    <button type="button" className="btn btn-secondary m-2" onClick={addProduct}>+</button>
                </div>
                <button type="button" className="btn btn-primary m-2 w-25" onClick={ () => onConfirm(count) }>
                    Agregar al Carrito
                </button>
                <p className="text-center">Stock: {maxQuantity}</p>
            </div>
        </div>
    
    )

}
*/


const ItemDetail = ( { product }) => {
 

    const { addItem } = useContext( CartContext )
    const [ quantity, setQuantity ] = useState(0)
    const { setNotification } = useContext(NotificationContext)

    const addToCart = ( quantity ) => {

        console.log('addToCart')
        setNotification(`Agregado ${ quantity } unidades al carrito.`, 'success')
        setQuantity( quantity )
        addItem( product, quantity)

    }

    return (
        <article>
             <div className='container p-5 m-3 backgroundDetail'>
                <div className='row justify-content-center'>

                    <div className='col col-md-6'>
                        <img className="card-img-top" src={product?.thumbnail} alt={product?.title} />
                    </div>

                    <div className='col col-md-6'>
                        <small>{product?.categoryType} • {product?.category}</small>
                        <h2> { product?.title } </h2>
                        <h3> ${product?.price}</h3>
                        <p>  {product?.detail }</p>
                        <div>
                            <h3>Tabla de talles</h3>
                            <small>Proximamente</small>
                        </div>
                        <div>
                            {
                                quantity === 0
                                ? <ItemCount product={product} onAdd={(quantity) => addToCart (quantity)} />
                                : <div className="card mt-3 mb-3">
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
