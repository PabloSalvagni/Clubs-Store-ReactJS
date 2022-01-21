import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList.jsx'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import Loading from '../Loader/Loading.jsx'

// firebase
import { db } from '../../Service/Firebase/Firebase.js'
import { collection , getDocs, query, where} from 'firebase/firestore'

const ItemListContainer = () => {

    // Load all Products of the list from db
    const [ products, setProducts] = useState([])
    const [ loading, setLoading ] = useState(true);
    // get the category param from url
    const { categoryId } = useParams()
    
    useEffect(() => {

        setLoading(true)
        getDocs(collection(db, 'items')).then( (querySnapshot) => {
            const products = querySnapshot.docs.map( doc => { 
                return { id: doc.id, ...doc.data() }
            })

            // Bring all products or categroyType
            categoryId === undefined ? setProducts(products) : 
            setProducts( products.filter( (producto) =>  producto.categoryType  === categoryId ))

        }).catch( (error) => {
            console.log(`Error searching items `, error);
        }).finally( () =>{
            setLoading(false)
        })


        return (() => {
            setProducts([])
        })

    }, [categoryId])


    if(loading) { return  ( <Loading /> ) }
    

    return (
        <div className="text-center p-0 pt-5">
            <ItemList products={ products } />
        </div>
    )
}

export default ItemListContainer
