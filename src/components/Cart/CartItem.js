import React, {useContext, useState} from 'react'
import classes from "./CartItem.module.css"
import CartContext from '../../store/cart-context'

function CartItem(props)
{

    const [selectedElements, setSelectedElements] = useState('')
    const cartContext = useContext(CartContext)


    const handleChange = (event) =>
    {
        setSelectedElements(event.target.value)
    }

    const removeItemHandler = (id) =>
    {

        cartContext.removeFromCart(props.id)

    }


    return (
        <>
            <div className={classes.cart__item}>

                <div>
                    <h4>{props.name}</h4>
                    <h4>Price: ${props.price}</h4>
                </div>

                <img className={classes.cart__ItemImg} src={props.image} alt={props.name} />


                <div className={classes.cart__itemInfo}>

                    <label forhtml='sizes' className={classes.cart__sizeLabel}>Sizes:

                        <select className={classes.cart__sizeOption} name='sizes' id='sizes' value={selectedElements} onChange={handleChange}>



                            {!selectedElements && <option value={selectedElements} disabled hidden >Select an Option</option>}


                            {props.sizes.map(size =>
                            {
                                return (
                                    <option key={size} className={classes.cart__sizeOption} value={size}>Mens {size} –– Womens {size - 1.5}</option>
                                )
                            }
                            )}
                        </select>
                    </label>
                    <button className={classes.cart__removeButton} onClick={removeItemHandler}>Remove Item</button>

                </div>
            </div>
        </>
    )

}



export default CartItem