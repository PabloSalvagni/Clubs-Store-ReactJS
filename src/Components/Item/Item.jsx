import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {

    // console.log('<Item /> ', product)
    const handleClick = (evt) => {
        evt.stopPropagation()
        console.log(`click en Item ${product.id}`);
    }

    return (
        
        <article className="card m-3 p-0"style={{width: "12rem"}} onClick={handleClick}>
            <img className="card-img-top" src={product.thumbnail} alt={product.title} />
            <div className="card-body">
                <small className="card-text">{ product.categoryType }  • {product.category}</small>
                <h5 className="card-title">{product.title}</h5>
                <h3 className="card-text">${product.price}</h3>
                <small className="card-text">Stock: <strong>{product.stock}</strong> u.</small>
                
                <Link className="btn btn-primary mt-3" to={`/detail/${product.id}`} >Ver detalles</Link>
            </div>
        </article>

    )
}

export default Item
