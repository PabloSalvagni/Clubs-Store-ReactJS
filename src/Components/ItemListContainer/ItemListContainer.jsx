import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList.jsx'
import './ItemListContainer.css'
import { getProducts } from '../../products.js'
import { useParams } from 'react-router-dom'
import Loading from '../Loader/Loading.jsx'


const ItemListContainer = () => {

    // Load all Products of the list.
    const [ products, setProducts] = useState([])
    const [ loading, setLoading ] = useState(true);
    console.log('loading', loading)

    // get the category param from url
    const { categoryId } = useParams()
    
    useEffect(() => {

        // console.log('< ItemListContainer /> || useEffect() ')
        getProducts(categoryId).then( item => {
            setProducts(item)
            setLoading(false)
        }).catch(err => {
            console.log(err)
        })
        
        return (() => {
            setProducts([])
        })

    }, [categoryId])

    if(loading) {
        return  (
            <Loading />
        )
    }
    return (
        <div className="text-center p-0 pt-5">
            {/* {loading ?   <i class="fas fa-sync fa-spin"></i> : <ItemList products={ products } /> } */}
            <ItemList products={ products } />
        </div>
    )
}

export default ItemListContainer
