import React, { useState } from 'react'
import './ItemCount.css'
import CartContext from '../../Context/CartContext'

const ItemCount = ({ product, onAdd  }) => {

    const [quantity, setQuantity] = useState(0)
    const [stockAct, setStockAct ] = useState(product.stock)
    

    const addProduct = () =>{
        if(quantity < product.stock){
            setQuantity( quantity + 1 )
            setStockAct(product.stock - (quantity +1 ))
        }
    }

    const remProduct = () =>{
        if(quantity > 0){
            setQuantity( quantity - 1 )
            setStockAct(stockAct + 1  )
        }
    }    
    
    return (
        <div className="card mt-3 mb-3">

            <div className="card-body text-center">
                <div className='text-center itemCount__container'>
                    <button type="button" className="btn btn-light itemCount__button" onClick={ () => remProduct() }>-</button>
                    <input type="text" value={quantity} className='text-center item__number'/>
                    <button type="button" className="btn btn-light itemCount__button" onClick={ () => addProduct()}>+</button>
                </div>
                <button type="button" className="btn btn-primary m-2" onClick={ () => onAdd (quantity)}> Agregar al Carrito
                </button>
                <p className="text-center">Stock disponible de productos: {stockAct}</p>
            </div>

        </div>
    )
}

export default ItemCount

