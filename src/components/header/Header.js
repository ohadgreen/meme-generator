import React from "react";
import { Link } from "react-router-dom";
import troll from "./troll-img.png";
import "./header.css"

export default function Header() {
    return (
        <header className="header">
            <img src={ troll } className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <div className="header--menu">
                <Link to={"/counter"}>counter</Link>
                <Link to={"/tiles"}>tiles</Link>
                <Link to={"/subscribe"}>subscribe</Link>
                <a href="https://www.ynet.co.il/">ynet</a>
            </div>
            <h4 className="header--subtitle">the joke is on you</h4>
        </header>
    )
}