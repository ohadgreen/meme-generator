import React from "react";
import Tile from "./Tile"
import "./Tile.css"

export default function TilesWrapper() {

    const tilesNumber = 8

    let tiles = [...Array(tilesNumber).keys()].map((index) => {
                    console.log(index + 1)
                    return (
                            < Tile number={index + 1}/>
                    )
                })

    return (
        <div className="tiles--wrapper">
        <h1>Switch Boxes</h1>
            { tiles }
        </div>
    )
}