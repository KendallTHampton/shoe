import React, {useContext} from "react";
import classes from "./Shoes.module.css";
import ShoeCard from "./ShoeCard";
import {shoeData} from "./ShoeData";
import CartContext from "../../store/cart-context";


function Shoes(props)
{

    const context = useContext(CartContext)


    const addShoeToCart = (item) =>
    {

        const itemObject = {
            id: item.id,
            name: item.name,
            image: item.image,
            desc: item.desc,
            price: item.price,
            sizes: item.sizes,
            amount: 1,
        }

        context.addToCart(
            itemObject
        )


    }



    return (
        <div className='container'>

            <div className={classes.shoe__section}>
                <h1> Shoes For Sale</h1>

                <div className={classes.shoe__contents}>

                    {shoeData.map((shoes =>
                    {
                        return (
                            <ShoeCard
                                key={shoes.key_id}
                                id={shoes.id}
                                image={shoes.img}
                                name={shoes.name}
                                desc={shoes.desc}
                                price={shoes.price}
                                sizes={shoes.sizes}
                                onAdd={addShoeToCart}
                            />
                        )
                    }))
                    }


                </div>
            </div>
        </div>
    );
}

export default Shoes;
