import React, {useReducer} from 'react'
import CartContext from './cart-context'


const defaultReducerState =
{
    cartItems: [],
    totalPrice: 0,
}

let count = 1

const reducerState = (state, action) =>
{
    if (action.type === "ADD__ITEM")
    {
        const total = state.totalPrice + action.item.price
        let updatedCart = state.cartItems.concat(action.item)

        const existingAtIndex = state.cartItems.findIndex(item => item.id === action.item.id)


        const indexItemExistAt = state.cartItems[existingAtIndex]


        if (indexItemExistAt)
        {

            action.item.id = action.item.id + count
            updatedCart = state.cartItems.concat(action.item)
            count++
        }


        return (
            {
                cartItems: updatedCart,
                totalPrice: total,
            }
        )

    }

    if (action.type === "REMOVE__ITEM")
    {


        let updatedCart = [...state.cartItems]

        let total = 0

        updatedCart = state.cartItems.filter(item =>
        {
            if (item.id !== action.id)
            {
                total += item.price

                return true
            }
            return false
        })



        return ({
            cartItems: updatedCart,
            totalPrice: total,
        })
    }


    return defaultReducerState
}



const CartProvider = (props) =>
{
    const [cartState, dispatchCartState] = useReducer(reducerState, defaultReducerState)

    const addToCartHandler = (item) =>
    {
        dispatchCartState({type: "ADD__ITEM", item: item})


    }

    const removeFromCartHandler = (id) =>
    {
        dispatchCartState({type: "REMOVE__ITEM", id: id})



    }



    const CartObjects = {
        cartItems: cartState.cartItems,
        totalPrice: cartState.totalPrice,
        addToCart: addToCartHandler,
        removeFromCart: removeFromCartHandler,
    }


    return (
        <CartContext.Provider value={CartObjects}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider