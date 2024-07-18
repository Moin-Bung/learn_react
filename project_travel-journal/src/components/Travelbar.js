import React from "react";
import '../App.css';
import locationicon from '../images/location-icon.png';

export default function Travelbar(props) {
    console.log(props);
    const image = `../images/${props.image}`;
    let separator
    if (props.id && props.id > 1){
        separator = <hr></hr>
    }

    return (
        <section>
        {separator}
            <div className="travelbar"> 
                <img className="travelbar--image" src={image} alt="travel-image" />
                <div className="travelbar--desc">
                    <span>
                        <img className="travelbar--icon"src={locationicon} alt="location-icon" />
                    </span>
                    <span className="travelbar--country">{props.country} </span>
                    <span>
                        <a className="travelbar--country-link" href={props.link}> View on Google Maps</a>
                    </span>
                    <h1 className="travelbar--location">{props.location}</h1>
                    <h3 className="travelbar--dates">{props.dates}</h3>
                    <p className="travelbar--text">{props.description}</p>
                </div>
            </div>
        </section>
    )
}