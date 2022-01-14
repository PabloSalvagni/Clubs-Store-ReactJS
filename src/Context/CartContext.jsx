import { createContext, useState, useContext } from "react";

// REFERENCE of the Context
export const CartContext = createContext();
 
// EXPORT nombed
export const CartContextProvider = ({ children }) => {

    const [ cart, setCart] = useState([])

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

    const isInCart = ( item ) => {
        console.log('isInCart : ', item)
        return cart.some(product => product.product === item);
    }   

    const removeProduct = ( productId ) => {
        console.log('removeProduct() :', productId)
    }

    const clearCart = () => {
        console.log('clearCart()')
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
                clearCart
                }}
            >
            {children}
        </CartContext.Provider>
    )

}

export default CartContext