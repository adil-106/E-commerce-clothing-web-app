import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setCartOpen: ()=>{},
    cartItems: [],
    addItemsToCart: ()=>{},
    cartCount: 0,
    removeItemsFromCart: ()=>{},
    deleteItemFromCart: ()=>{},
    cartTotal: 0
});

export const CartProvider = ({children})=>{
    const [isCartOpen,setCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);

    const [cartCount,setCartCount] = useState(0);

    const [cartTotal,setCartTotal] = useState(0);

    //update total quantity in cart - to be used in cart icon
    useEffect(()=>{
        let updatedCount = cartItems.reduce((total,cartItem)=>
            total + cartItem.quantity
        ,0);
        setCartCount(updatedCount);
    },[cartItems]);

    useEffect(()=>{
        let updatedTotal = cartItems.reduce((total,cartItem)=>
            total + cartItem.quantity * cartItem.price
        ,0);
        setCartTotal(updatedTotal);
    },[cartItems]);

    function addItemsToCart(productToAdd){
        setCartItems(addToCart(cartItems,productToAdd));
    }

    function removeItemsFromCart(cartItemToRemove){
        setCartItems(removeFromCart(cartItems,cartItemToRemove));
    }

    function deleteItemFromCart(cartItemToDelete){
        setCartItems(deleteItem(cartItems,cartItemToDelete));
    }

   

    const value = {isCartOpen,setCartOpen, cartItems, addItemsToCart, cartCount, removeItemsFromCart, deleteItemFromCart, cartTotal};
    return(<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}



//function to increase the quantity of the exisiting cartItem or add new item in cartItems
function addToCart(cartItems,productToAdd){
    const existingCartItem = cartItems.find((cartItem) => cartItem.id===productToAdd.id);

    //if item exists increase quantity
    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem,quantity:cartItem.quantity+1}: cartItem);
    }

    // if item is new, add to cartItems with quantity=1
    return [...cartItems,{...productToAdd,quantity:1}];
}

//function to decrement the quantity of the exisiting carItem or delete if carItem.quantity = 0;
function removeFromCart(cartItems,cartItemToRemove){
    const existingCartItem = cartItems.find((cartItem) => cartItem.id===cartItemToRemove.id);

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? {...cartItem,quantity:cartItem.quantity-1}: cartItem);

}

//function to completely remove the cartItem i.e to make the quantity =0;
function deleteItem(cartItems,cartItemToDelete){
    return cartItems.filter(cartItem => cartItem.id !== cartItemToDelete.id);
}