import React, {useContext, useEffect, useState} from "react";
import classes from "./Shoes.module.css";
import ShoeCard from "./ShoeCard";
import {shoeData} from "./ShoeData";
import CartContext from "../../store/cart-context";
import {storage} from "../../store/firebaseConfig";
import {getDownloadURL, ref} from "firebase/storage";


function Shoes(props)
{
    const [shoes, setShoes] = useState([])
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

    useEffect(() =>
    {
        const fetchMeals = async () =>
        {
            const response = await fetch('https://shoeapp-e4b89-default-rtdb.firebaseio.com/shoes.json')

            if (!response.ok)
            {
                throw new Error("Something Went Wrong")
            }

            const responsedata = await response.json()


            const shoes = []

            for (let key in responsedata)
            {
                const imageURL = await getDownloadURL(ref(storage, responsedata[key].image))
                    .then((url) =>
                    {

                        const image = url
                        return image


                    })
                    .catch((error) =>
                    { });


                shoes.push({

                    id: key,
                    name: responsedata[key].name,
                    price: responsedata[key].price,
                    desc: responsedata[key].desc,
                    image: imageURL,
                    sizes: responsedata[key].sizes
                })
            }
            setShoes(shoes)
        }

        fetchMeals();
    }, [])


    return (
        <div className='container'>

            <div className={classes.shoe__section}>
                <h1> Shoes For Sale</h1>

                <div className={classes.shoe__contents}>

                    {shoes.map((shoe =>
                    {
                        return (
                            <ShoeCard
                                key={shoe.id}
                                id={shoe.id}
                                image={shoe.image}
                                name={shoe.name}
                                desc={shoe.desc}
                                price={shoe.price}
                                sizes={shoe.sizes}
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
