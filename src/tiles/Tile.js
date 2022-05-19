import React from "react";
import "./Tile.css"

export default function Tile(props) {
    return (
            <div className="tile--1"
                 key={props.number}
                 onClick={() => console.log(props.number, " clicked")}
            >{props.number}</div>
    )
}