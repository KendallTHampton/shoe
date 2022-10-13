import React from "react"

//The CartContext is a context object that is used to share data between components. Allowing us to share data between components without having to pass props down the component tree. State management is a common use case for context. 


const CartContext = React.createContext({
    cartItems: [],
    totalItems: 0,
    addToCart: (item) => { },
    removeFromCart: (id) => { }
})


export default CartContext