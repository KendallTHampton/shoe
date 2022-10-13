import React from 'react'
import classes from "./ShoeCard.module.css"


function ShoeCard(props)
{


    const onAddHandler = () =>
    {
        props.onAdd(props)
    }


    return (

        <div className={classes.card}>
            <img src={props.image} alt='shoes' className={classes.shoe__img} />

            <div className={classes.shoe__info}>
                <h3 className={classes.shoe__name}>{props.name}</h3>
                <p className={classes.shoe__desc}>{props.desc}</p>
            </div>

            <div className={classes.shoe__actions}>
                <p className={classes.shoe__price}>
                    Price:
                    ${props.price}
                </p>

                <button className={classes.shoe__purchase} onClick={onAddHandler}>
                    Buy Shoe
                </button>

            </div>
        </div>

    )
}

export default ShoeCard