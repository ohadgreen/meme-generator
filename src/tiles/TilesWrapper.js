import React from "react";
import Tile from "./Tile"
import "./Tile.css"

export default function TilesWrapper() {

    const tilesNumber = 16
    const numbers = [...Array(tilesNumber).keys()]
    let tilesInit = []
    numbers.forEach(i => {
        tilesInit.push({
            index: i,
            on: false
        })
    })

    const [boxes, setBoxes] = React.useState(tilesInit)

    const toggleTile = (i) => {
        let boxToUpdate = boxes[i]
        boxToUpdate = {...boxToUpdate, on: !boxToUpdate.on}

        let newBoxes = [...boxes]
        newBoxes[i] = boxToUpdate
        setBoxes(newBoxes)
    }

    let tiles1 = boxes.map((box, index) => {
        return (
                < Tile tile={box}
                toggleTile={toggleTile}
                />
            )
    })

    return (
        <div className="tiles--wrapper">
        <h1>Switch Boxes</h1>
            { tiles1 }
        </div>
    )
}
