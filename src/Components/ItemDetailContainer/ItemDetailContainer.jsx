import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import Loading from '../Loader/Loading'

// firebase
import { db } from '../../Service/Firebase/Firebase'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [ product, setProduct] = useState()
    const [ loading, setLoading ]  = useState (true)
    const { paramId } = useParams();
    
    useEffect( () => {
        
        // FIREBASE 
        setLoading(true)
        getDoc(doc(db, 'items', paramId )).then ((querySnaptshot) => {
            const product = { id: querySnaptshot.id, ...querySnaptshot.data() }
            setProduct(product)
        }).catch ((error) => {
            console.log(error)
        }).finally( () =>{
            setLoading(false)
        })
        
        return (() =>{
            setProduct()
        })

    }, [paramId])


    return (
        <div>
            { loading ? 
                <Loading />
                : <ItemDetail product={product} />}
        </div>
    )
}

export default ItemDetailContainer
