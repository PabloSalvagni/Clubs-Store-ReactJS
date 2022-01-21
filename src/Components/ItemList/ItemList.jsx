import React, {useContext} from 'react'
import Item from '../Item/Item'
// import {TestContext} from '../../App'

const ItemList = ({ products = []}) => {

    console.log(`Products of ItemList :`, products)

    return (
        <div className="row justify-content-center">
            { products.map( product =>  <Item  key={product.id}  id= {product.id} product= {product} />)}
        </div>
    )
}

export default ItemList
