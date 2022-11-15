import React from "react";
import "./Tile.css"

export default function Tile(props) {

    const tileStyle = props.tile.on ? "tile--one--on" : "tile--one--off"

    let tileDisplayColor

    switch (props.tile.mode) {
        case "HIDDEN":
            tileDisplayColor = "white"
            break
        case "VISIBLE":
            tileDisplayColor = props.tile.color
            break
        case "GONE":
            tileDisplayColor = "lightgrey"
    }

    return (
            <div
                className="tile--one--off"
                 style={{ backgroundColor: tileDisplayColor }}
                 onClick={() => props.flipTile(props.tile.index)}
            >{props.tile.index + 1}</div>
    )
}