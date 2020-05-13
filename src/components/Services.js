import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: 'Free Cocktails',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?'
            },
            {
                icon: <FaHiking/>,
                title: 'Endless Hiking',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?'
            },
            {
                icon: <FaShuttleVan/>,
                title: 'Free Shuttle',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?'
            },
            {
                icon: <FaBeer/>,
                title: 'Strongest Beer',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?'
            }
        ]
    }
    render() {
        return (
            <div className="services">
                <Title title="services"/>
                <div className="services-center">
                    {
                        this.state.services.map((item, index)=>
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.text}</p>
                            </article>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Services;