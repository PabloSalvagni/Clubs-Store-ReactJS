import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ products = []}) => {

    return (
        <div className="row justify-content-center">
            { products.map( product =>  <Item  key={product.id}  id= {product.id} product= {product} />) }
        </div>
    )
}

export default ItemList
