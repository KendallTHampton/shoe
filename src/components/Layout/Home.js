import React from 'react'
import introImage from '../../assets/intro.jpg'
import classes from './Home.module.css'

function Home()
{
    return (


        <div className={`container ${ classes.home }`
        } >

            <div className={classes.home__contents}>


                <div className={classes.desc}>
                    <div>
                        <h1>Buy Authenticated Shoes From Us!</h1>
                        <p>Let us be your go to place for real and authenticated sneakers. We offer premium shoes for less than what you would get on other exclusive resellers. We guarentee fast and reliable shipping.</p>
                    </div>

                    <button>Shoe Selection</button>

                </div>

                <img src={introImage} alt='Guy Holding Panda Dunks' />

            </div>
        </div >

    )
}

export default Home