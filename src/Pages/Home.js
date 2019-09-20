import React from 'react'
import Hero from "../Component.js/Hero";
import Banner from "../Component.js/Banner";
import {Link} from "react-router-dom";
import Services from "../Component.js/Services";
import FeaturedRooms from "../Component.js/FeaturedRooms";

export default function Home() {
    return (
        <>
        <Hero>
            <Banner title=" luxurious rooms" subtitle="deluxs rooms starting at $299">
                 <Link to="/rooms" 
                 className="btn-primary">our rooms</Link>
             </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        </>
    );
}
