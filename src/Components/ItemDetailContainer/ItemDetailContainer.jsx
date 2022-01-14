import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { getProductById } from '../../products.js'
import { useParams } from 'react-router-dom'
import Loading from '../Loader/Loading'

// firebase
// import { db } from '../../Services/Firebase/firebase.js'
// import { collection, getDocs } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [ product, setProduct] = useState()
    // const [ inputType, setInputType] = useState('input')
    const [ loading, setLoading ]  = useState (true)

    const { paramId } = useParams();
    
    // const [loading, setLoading] = useState()
    // const { categoryId } = useParams();

    useEffect( () => {
        
        // FIREBASE 
        //    setLoading(true)
        //         getDocs(collection(db, 'items')).then( (querySnapshot) => {
        //         console.log(querySnapshot)
        //         const products = querySnapshot.docs.map (doc => {
        //             console.log(doc)
        //             return {id: doc.id, ...doc.data()}
        //         }).catch((error) => {
        //             console.log('Error searching items', error)
        //         }).finally(()=>{
        //             setLoading(false)
        //         })
        //         setProducts(products)
        //     })
   
        // PROMISE SIMULADA
        getProductById(paramId).then(item => {
            setProduct(item)
            setLoading(false)   
        }).catch( err => {
            console.log(err)
        })

        return (() =>{
            setProduct()
        })

    }, [paramId])


    return (
        <div>
            {/* <button onClick={ () => setInputType('input')} className='btn primary-button'>Input</button>
            <button onClick={ () => setInputType('button')}  className='btn primary-button'>Button</button>
            <ItemDetail product={product} inputType={inputType}/> */}

            { loading ? 
                <Loading />
                : <ItemDetail product={product} />}

        </div>
    )
}

export default ItemDetailContainer
