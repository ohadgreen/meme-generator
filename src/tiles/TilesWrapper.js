import React from "react";
import Tile from "./Tile"
import "./Tile.css"

export default function TilesWrapper() {

    const [boxes, setBoxes] = React.useState(initTilesArray())

    const toggleTile = (i) => {
        let boxToUpdate = boxes[i]
        boxToUpdate = {...boxToUpdate, mode: boxToUpdate.mode === "HIDDEN" ? "VISIBLE" : "HIDDEN"}

        let newBoxes = [...boxes]
        newBoxes[i] = boxToUpdate
        setBoxes(newBoxes)
    }

    let tiles1 = boxes.map((box, index) => {
        return (
                <   Tile tile={box}
                    key={index}
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

function initTilesArray() {
    const tilesNumber = 16
    const numbers = [...Array(tilesNumber).keys()]
    const colors = ["red", "blue", "orange", "green", "black", "grey", "brown", "purple"]
    const colorsTemp = colors.concat(colors)

    let tilesInit = []

    for (let i = 0; i < tilesNumber; i++) {
        const rand = Math.floor(Math.random() * (tilesNumber - 1 - i))

        tilesInit.push({
            index: i,
            mode: "HIDDEN",
            color: colorsTemp[rand]
        })
        colorsTemp[rand] = colorsTemp[tilesNumber - 1 - i]
    }
    return tilesInit
}
