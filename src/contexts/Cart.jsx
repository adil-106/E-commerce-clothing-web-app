import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setCartOpen: ()=>{},
    cartItems: [],
    addItemsToCart: ()=>{},
    cartCount: 0
});

export const CartProvider = ({children})=>{
    const [isCartOpen,setCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);

    const [cartCount,setCartCount] = useState(0);

    //update total quantity in cart - to be used in cart icon
    useEffect(()=>{
        let updatedCount = cartItems.reduce((total,cartItem)=>
            total + cartItem.quantity
        ,0);
        setCartCount(updatedCount);
    },[cartItems]);

    function addItemsToCart(productToAdd){
        setCartItems(addToCart(cartItems,productToAdd));
    }

    const value = {isCartOpen,setCartOpen, cartItems, addItemsToCart, cartCount};
    return(<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}



function addToCart(cartItems,productToAdd){
    const existingCartItem = cartItems.find((cartItem) => cartItem.id===productToAdd.id);

    //if item exists increase quantity
    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem,quantity:cartItem.quantity+1}: cartItem);
    }

    // if item is new, add to cartItems with quantity=1
    return [...cartItems,{...productToAdd,quantity:1}];
}