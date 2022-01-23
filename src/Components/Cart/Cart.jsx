import React from 'react'
import { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import NotificationContext from '../../Context/NotificationContext'
import './Cart.css'
import { Link } from 'react-router-dom'
import { db } from '../../Service/Firebase/Firebase'
import { collection, addDoc, doc, writeBatch, getDoc } from 'firebase/firestore'

import Loading from '../Loader/Loading'

const Cart = () => {

    const [ purchase, setPurchase ] = useState(false)
    const [ order, setOrder] = useState('')

    const { cart, getQuantity, removeProduct, clearCart, getTotalPrice } = useContext(CartContext)
    const [ loading, setLoading ] = useState(false);
    const { setNotification } = useContext(NotificationContext)

    const [form, getForm] = useState({ nombre: '', phone: '', email: '' });

    const fillForm = (e) => {
        const { name, value } = e.target;
        getForm({
            ...form,
            [name]: value,
        });
    };

    const date = new Date()

    const sendOrder =  () => {

        getForm(form)
        setLoading(true)
        
        const newOrder = {
            buyer: { nameBuyer: form.name, phone: form.phone, email: form.email},
            items: cart,
            date: date,
            total: getTotalPrice(),
        }

        const batch = writeBatch(db);
        const outOfStock = [];
    
        newOrder.items.forEach((prod) => {
            getDoc(doc(db, 'items', prod.product.id)).then((qSnapshot) => {
                if(qSnapshot.data().stock >= prod.quantity) {
                    batch.update(doc(db, 'items', qSnapshot.id), {
                        stock: qSnapshot.data().stock - prod.quantity
                    })
                } else {
                    outOfStock.push({ id: qSnapshot.id, ...qSnapshot.data()})
                    setNotification(`Lo siento pero no hay stock del producto: ${ prod.product.title }`, 'error')
                    setPurchase(false)
                }
            })
        }) 
        
        if (outOfStock.length < 1) {  
            addDoc(collection(db, 'orders'), newOrder).then(({id}) => {
                batch.commit().then( () =>{
                    setOrder(id)
                    setPurchase(true) 
                })
            }).catch(( error ) =>{
                setNotification(`Lo siento pero hay un error: ${ error }`, 'error')
            }).finally(() =>{
                setLoading(false);
                clearCart()
            })
        }
    }

    return (
        <article className='container p-5'>
            <h1 className='text-left cart__titulo'>Carrito de Compras</h1>

            {( getQuantity() !== 0)
                    
                    ?<div className='row'>
                        <div className='col-md-8 p-4'>
                            <h4>PRODUCTOS ({ getQuantity() })</h4>
                            <div className='p-2'>
                                { cart.map ( item => {
                                    return  (
                                        <div key={item.product.id} className='row item__container'>
                                            <div className='col-md-5 p-0'>
                                                <img className="mx-auto d-block w-100 item__container--img" src={item.product.thumbnail} alt={item.product.title} />
                                            </div>
                                            <div className='col-md-6 item__container--info'>
                                                <p className='item__container--info--titulo'>{ item.product.title }</p>
                                                <p className='item__container--info--txt'>
                                                    {item.product.categoryType} • {item.product.category} <br />
                                                    Valor: ${item.product.price}<br />
                                                    Cantidad: { item.quantity }<br />
                                                </p> 
                                                <p className='item__container--info--txt'>
                                                    <b> SUBTOTAL: ${ item.product.price * item.quantity } </b>
                                                </p>
                                            </div>
                                            <div className='col-md-1 text-center item__container--btns'>
                                                <div className='item_click' onClick={ () => { removeProduct( item.product.id ) } }>
                                                    <i className="fas fa-times-circle fas-2x"></i>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                             </div>    
                        </div>

                        <div className=' col-md-4 p-4'>

                            <h4>Resumen del Pedido</h4> 
                            <hr />
                                <h4 className='item__container--info--txt' >Cantidad de productos: { getQuantity() }</h4>
                                <h3 className='item__container--info--txt' >Total: <b>$ { getTotalPrice() } </b></h3>
                            <hr />
                            
                            <p>Para finalizar la compra debes completar los siguientes datos.</p>
                            
                            { loading ? <Loading /> :
                                <form >

                                    <label >Nombre y Apellido</label>
                                    <input onChange={ fillForm } 
                                        className='form-control form__input'  
                                        type="text"  name="name" 
                                        placeholder="Su nombre y apellido  (*)" 
                                        required />
                                    
                                    <label >Telefono</label>
                                    <input onChange={ fillForm } 
                                        className='form-control form__input'      
                                        type="number" name="phone" 
                                        placeholder="000 0000 0000  (*)" 
                                        required/>
                                       
                                    <label >Email</label>
                                    <input onChange={ fillForm } 
                                        className='form-control form__input' 
                                        type="email" 
                                        name="email"
                                        placeholder="mail@mail.com (*)" 
                                        required/>
                                        
                                    <div className='text-center'>

                                        <button type='button' className='btn btn-primary item_click m-1 w-100 mb-4' 
                                            disabled={  form.name === '' || form.email === '' || form.phone === ''} onClick={ sendOrder } 
                                        > Confirmar Compra </button>
                                        
                                        <button type='button' className='btn btn-primary item_click m-1'  onClick={ () =>{ clearCart() }} >Vaciar Carrito</button>
                                        
                                        <Link to={'/'}><button type='button' className='btn btn-primary item_click m-1 '> Seguir comprando</button></Link>

                                    </div>

                                </form>
                            }

                        </div>
                    </div>

                :<div>
                    { (!purchase)
                    ?<div>
                        <h3>No tiendas productos cargados en el carrito.</h3>
                        <Link to={'/'}> <button type='button' className='btn btn-primary m-2'>Ir a Comprar</button></Link>
                    </div>
                    :<div>
                        <h3>Pedido realizado exitosamente.</h3>
                        <p>Su numero de orden es: <strong> { order }</strong></p>
                        <Link to={'/'}> <button type='button' className='btn btn-primary m-2'>Seguir comprando</button></Link>
                    </div>
                    }
                </div>

            }
        </article>
    )
}

export default Cart
