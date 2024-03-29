import React, { Component } from 'react'
import { RoomContext } from "../Context";
import Loading from "./Loading";
import VisitRoom from "./VisitRoom";
import Title from "./Title";     


export default class FeaturedRooms extends Component {
    static contextType = RoomContext; 
    render() { 
         let { loading, featuredRooms: rooms} = this.context;
         //console.log(stores);
      rooms = rooms.map(room => { 
         return <VisitRoom key={room.id} room={room} />; 
      });
        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-room-center">
                   {loading ? <Loading /> : rooms}
                </div>
        
                {/* <VisitRoom />   
                <Loading /> */}
            </section>
             
             
        );
    }
}
