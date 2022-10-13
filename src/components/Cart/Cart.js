import React, {useContext} from 'react'
import CartContext from '../../store/cart-context'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import classes from './Cart.module.css'


function Cart(props)
{

    const cartContextData = useContext(CartContext)

    const cartItems = cartContextData.cartItems
    const totalAmount = cartContextData.totalPrice

    let displayCart

    if (cartItems.length > 0)
    {
        displayCart =
            <div className={classes.cart__container}>
                <div className={classes.cart__items}>

                    {cartItems.map(data =>
                    {
                        return (

                            <CartItem
                                key={data.id + ''}
                                name={data.name}
                                price={data.price}
                                image={data.image}
                                sizes={data.sizes}
                                id={data.id}
                            />

                        )
                    })}
                </div>

                <div className={classes.cart__total}>
                    <h2>Total Amount</h2>
                    <div className={classes.underLine}></div>
                    <h5 className={classes.cart__amount}>${totalAmount}</h5>
                </div>

            </div>

    }
    else
    {
        displayCart = <h1 style={{textAlign: 'center'}}>No Items In The Cart</h1>
    }





    return (
        <Modal onHideCart={props.onHideCart}>
            <div className={classes.modal}>

                {displayCart}

            </div>
            <div className=
                {cartItems.length > 0 ? `${ classes.cart__buttons }` : `${ classes.cart__button }`}
            >
                <button className=
                    {classes.cart__btnClose} onClick={props.onHideCart}>Close Cart</button>


                {cartItems.length > 0 &&
                    <button onClick={props.onHideCart} className={classes.cart__btnOrder}>Checkout</button>}
            </div>
        </Modal>
    )
}



export default Cart