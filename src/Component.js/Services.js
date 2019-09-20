import React, { Component } from 'react'
import  Title from "./Title";
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer}
 from "react-icons/fa";



export default class Services extends Component {     
    state = {
        Services: [
            {
                icon:<FaCocktail />,
                title: "free cocktails",
                info: "der lorf is god bto me all d tnem"
                
            },
            {
                icon:<FaHiking />,
                title: "free hiking ",
                info: "der lorf is god bto me all d tnem"
                
            },
            {
                icon:<FaShuttleVan />,
                title: "free cock shuttlevan",
                info: "der lorf is god bto me all d tnem"
                
            },
            {
                icon:<FaBeer />,
                title: "free cock beer",
                info: "der lorf is god bto me all d tnem"
                
            },
        ]
    }                                                                                                         
    render() {
        return (
            <section className="services">
              <Title title="services" />
              <div className="services-center">
                  {this.state.Services.map((item,index) => {
                return (
                <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                    </article>
                    )
                  })} 

              </div>
            </section>
        )
    }
}
