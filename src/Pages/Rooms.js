import React from 'react'
import Hero from "../Component.js/Hero";
import Banner from "../Component.js/Banner";
import {Link} from "react-router-dom";

const Rooms = () => {
    return (
        <div>
        <Hero hero="roomsHero">
            <Banner title="our rooms">
                <Link to="/" className="btn-primary">
                  return home  
                </Link>
            </Banner>
        </Hero>
        </div>
    )
}

export default Rooms

