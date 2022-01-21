import { createContext, useState } from "react";

// REFERENCE of the Context
export const CartContext = createContext();
 
// EXPORT nombed
export const CartContextProvider = ({ children }) => {

    const [ cart, setCart] = useState([])
    const [ totalPrice, setTotalPrice] = useState()

    const addItem = ( product, quantity ) => {
       
        const flag = isInCart(product)
        console.log('flag : ', flag)

        if(flag) {

            let productRepeted = cart.find(element => element.product === product)
            productRepeted.quantity += quantity;
            let cartNoRepeat = cart.filter( element => element.product !== product); // Bring all but repeated item
            setCart( [...cartNoRepeat, productRepeted]) 
        }else{
            setCart([ ...cart , {product: product, quantity: quantity}]);
        }
        getQuantity()

    }

    const getTotalPrice = () => {

        let tmpProducts = [...cart];
        let cantProd = tmpProducts.reduce( (previousValue, currentValue) => previousValue + currentValue.quantity, 0);
        console.log('cantProd: ', cantProd)

        let tmptotalPrice = 0;

        tmpProducts.forEach ( p =>{
            tmptotalPrice=tmptotalPrice+(p.quantity*p.product.price)
        })
        
        console.log('tmptotalPrice', tmptotalPrice)

        return tmptotalPrice

    }


    const isInCart = ( item ) => {
        console.log('isInCart : ', item, 'cart: ', cart)
        return cart.some(product => product.product === item);
    }   

    const removeProduct = ( productId ) => {

        let productToRemove = cart.filter( element => element.product.id !== productId, console.log('productId: ', productId) )
        setCart(productToRemove)

    }

    const clearCart = () => {
        setCart([])
    }

    const getQuantity  = () => {

        let count = 0;

        cart.forEach(element => {
            count += element.quantity 
        });

        return count
        
    }

    

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                getQuantity,
                isInCart, 
                removeProduct, 
                clearCart,
                getTotalPrice
                }}
            >
            {children}
        </CartContext.Provider>
    )

}

export default CartContext