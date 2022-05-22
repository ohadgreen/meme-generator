import React from "react";
import "./Tile.css"

export default function Tile(props) {

    const tileStyle = props.tile.on ? "tile--one--on" : "tile--one--off"

    return (
            <div className={tileStyle}
                 key={props.tile.index}
                 onClick={() => props.toggleTile(props.tile.index)}
            >{props.tile.index + 1}</div>
    )
}