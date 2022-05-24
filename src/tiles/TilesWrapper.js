import React from "react";
import Tile from "./Tile"
import "./Tile.css"
export default function TilesWrapper() {

    const [gameStatus, setGameStatus] = React.useState({
        gameOver: false,
        tilesVisible: 0,
        firstTileFlipped: "",
        secondTileFlipped: "",
        totalPairsDiscovered: 0,
        turnsCount: 0,
        tilesArray: initTilesArray()
    })

    const flipTile = (i) => {
        if (gameStatus.tilesVisible === 0) {
            setGameStatus(prevState => {
                return {
                    ...prevState,
                    tilesVisible: 1,
                    firstTileFlipped: i,
                    tilesArray: updateTilesInArray(i, null, "VISIBLE")
                }
            })
        }

        if (gameStatus.tilesVisible === 1) {
             setGameStatus(prevState => {
                return {
                    ...prevState,
                    tilesVisible: 2,
                    secondTileFlipped: i,
                    tilesArray: updateTilesInArray(i, null, "VISIBLE")
                }
            })
        }
        if (gameStatus.tilesVisible === 2) {
            alert("click new")
        }
    }

    function newTurn() {
        if (gameStatus.tilesVisible === 2) {
            const totalTurns = gameStatus.turnsCount + 1
            if (gameStatus.tilesArray[gameStatus.firstTileFlipped].color === gameStatus.tilesArray[gameStatus.secondTileFlipped].color) {
                console.log((gameStatus.totalPairsDiscovered + 1) + " matches in "  + totalTurns + " turns")

                setGameStatus(prevState => {
                return {
                    ...prevState,
                    tilesVisible: 0,
                    firstTileFlipped: "",
                    secondTileFlipped: "",
                    turnsCount: totalTurns,
                    totalPairsDiscovered: prevState.totalPairsDiscovered + 1,
                    tilesArray: updateTilesInArray(gameStatus.firstTileFlipped, gameStatus.secondTileFlipped, "GONE")
                }
            })
            } else {
                console.log(totalTurns + " turns")
                setGameStatus(prevState => {
                return {
                    ...prevState,
                    tilesVisible: 0,
                    firstTileFlipped: "",
                    secondTileFlipped: "",
                    turnsCount: totalTurns,
                    tilesArray: updateTilesInArray(gameStatus.firstTileFlipped, gameStatus.secondTileFlipped, "HIDDEN")
                }
            })
            }
        }
        setGameStatus(prevState => {
            return {...prevState, tilesVisible: 0, firstTileFlipped: ""}
        })
    }

        function updateTilesInArray(firstTileIndex, secondTileIndex, mode) {
        let newTilesArray = [...gameStatus.tilesArray]

        let tileToUpdate = gameStatus.tilesArray[firstTileIndex]
        tileToUpdate = {...tileToUpdate, mode: mode}
        newTilesArray[firstTileIndex] = tileToUpdate

        if (secondTileIndex !== null) {
            tileToUpdate = gameStatus.tilesArray[secondTileIndex]
            tileToUpdate = {...tileToUpdate, mode: mode}
            newTilesArray[secondTileIndex] = tileToUpdate
        }
        return newTilesArray
    }

    let tiles1 = gameStatus.tilesArray.map((box, index) => {
        return (
            <   Tile tile={box}
                     key={index}
                     flipTile={flipTile}
            />
        )
    })

    return (
        <div className="tiles--wrapper">
            <h1>Memory Card Matching</h1>
            { tiles1 }
            <p>
                <button onClick={newTurn}>new</button>
            </p>
        </div>
)
}

function initTilesArray() {
    const tilesNumber = 16
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
