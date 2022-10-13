import React, {useContext, useState} from 'react'
import CartContext from '../../store/cart-context'
import {CartIcon} from './NavIcons'
import {AiOutlineMenu} from "react-icons/ai"
import {FaRegWindowClose} from "react-icons/fa"
import classes from './Navbar.module.css'




function Navbar(props)
{
    const [showNav, setShowNav] = useState(false)


    const onShowNavbar = () =>
    {
        setShowNav(!showNav)
    }

    const cartCtx = useContext(CartContext)
    const cartAmount = cartCtx.cartItems.length


    let cart = <div className={classes.circle}><p>{cartAmount}</p></div>

    if (cartAmount <= 0)
    {
        cart = null
    }


    return (
        <header>
            <div className={classes.navbar}>
                <h2>Shoes Central</h2>

                <div className={showNav ? `${ classes.nav__list } ${ classes.nav__active }` : `${ classes.nav__list }`} >

                    <h4 className={classes.nav__item}>Shoes</h4>
                    <h4 className={classes.nav__item}>Contact</h4>

                    <div className={`${ classes.cart } ${ classes.nav__item }`} onClick={props.onShowCart}>
                        <h4>Cart</h4>
                        <div className={classes.cart__icon}>
                            <CartIcon />
                            {cart}
                        </div>
                    </div>
                    <FaRegWindowClose
                        style={{fontSize: '1.8rem'}}
                        className={classes.menu__close}
                        onClick={onShowNavbar}
                    />
                </div>

                <div className={classes.menu__div}>
                    <AiOutlineMenu
                        style={{fontSize: '1.8rem'}}
                        className={classes.menu}
                        onClick={onShowNavbar}
                    />
                    {cartAmount > 0 && <div className={classes.circle__menu}><p>{cartAmount}</p></div>}
                </div>


            </div>

        </header>
    )
}

export default Navbar