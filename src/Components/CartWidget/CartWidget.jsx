import React, {useContext} from 'react'
import './CartWidget.css'
import CartContext from '../../Context/CartContext'

const CartWidget = () => {

    const { getQuantity } = useContext (CartContext)

    return (
        <div className="cartWidget__back">
            <button type="button" className="btn btn-secondary position-relative">
            <i className="fas fa-shopping-cart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {getQuantity()}
                </span>
            </button>
        </div>
    )
}

export default CartWidget
