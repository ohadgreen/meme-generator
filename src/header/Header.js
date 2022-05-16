import React from "react";
import troll from "./troll-img.png";
import "./header.css"

export default function Header() {
    return (
        <header className="header">
            <img src={ troll } className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--subtitle">the joke is on you</h4>
        </header>
    )
}