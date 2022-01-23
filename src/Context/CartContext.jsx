import { createContext, useState } from "react";

// REFERENCE of the Context
export const CartContext = createContext();
 
// EXPORT nombed
export const CartContextProvider = ({ children }) => {

    const [ cart, setCart] = useState([])

    const addItem = ( product, quantity ) => {
       
        const flag = isInCart(product)
       
        if(flag) {
            let productRepeted = cart.find(element => element.product.id === product.id)
            productRepeted.quantity += quantity;
            let cartNoRepeat = cart.filter(element => element.product.id !== product.id); // Bring all but repeated item
            setCart( [...cartNoRepeat, productRepeted]) 
        }else{
            setCart([ ...cart , {product: product, quantity: quantity}]);
        }
        getQuantity()

    }

    // Check if the product is in the cart.
    const isInCart = ( item ) => { 
        return cart.some( product => product.product.id === item.id );
    }

    const getTotalPrice = () => {
       
        let tmpProducts = [...cart];
        
        let tmptotalPrice = 0;

        tmpProducts.forEach ( p =>{
            tmptotalPrice=tmptotalPrice+(p.quantity*p.product.price)
        })
        return tmptotalPrice

    }

    
    const removeProduct = ( productId ) => {
        
        let productToRemove = cart.filter( element => element.product.id !== productId )
        setCart(productToRemove)

    }

    const clearCart = () => {
        setCart([])
    }

    const getQuantity  = () => {

        let count = 0;
        cart.forEach(element => count += element.quantity );
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