import React from 'react'
import Hero from "../Component.js/Hero";
import Banner from "../Component.js/Banner";
import {Link} from "react-router-dom";
import RoomsContainer from "../Component.js/RoomsContainer";

const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="our rooms">
                <Link to="/" className="btn-primary">
                  return home  
                </Link>
            </Banner>
        </Hero>
        <RoomsContainer />
        </>
    )
}

export default Rooms

