import React from 'react'
import VisitRoom from "./VisitRoom";

export default function RoomsList({rooms}) {
    if(rooms.length === 0){
        return(
            <div className="empty-search">
                <h3>unfortunateli no room match your 
                    search
                </h3>
            </div>
        )
    }
    return (
        <section className="rooms-list">
           <div className="roomslist-center">
            {rooms.map(item => {
            return <VisitRoom key={item.id} room={item} />;
            })}
            </div> 
        </section>
    );
}
