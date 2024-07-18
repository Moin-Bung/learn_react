import React from "react";
import '../App.css';
import icon from '../images/travel-journal-icon.png';

export default function Headerbar() {
    return (
        <header className="headerbar">
            <img className="headerbar--icon" src={icon} alt=""/>
            <text className="headerbar--text"> my travel journal. </text>
        </header>
    )
}