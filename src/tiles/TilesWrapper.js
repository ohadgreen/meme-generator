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
        tilesArray: initTilesArray()
    })

    const flipTile = (i) => {
        if (gameStatus.tilesVisible === 0) {
            let tileToUpdate = gameStatus.tilesArray[i]
            tileToUpdate = {...tileToUpdate, mode: "VISIBLE"}
            let newTilesArray = [...gameStatus.tilesArray]
            newTilesArray[i] = tileToUpdate

            setGameStatus(prevState => {
                return {
                    ...prevState,
                    tilesVisible: 1,
                    firstTileFlipped: i,
                    tilesArray: newTilesArray
                }
            })
        }

        if (gameStatus.tilesVisible === 1) {
            let tileToUpdate = gameStatus.tilesArray[i]
            tileToUpdate = {...tileToUpdate, mode: "VISIBLE"}
            let newTilesArray = [...gameStatus.tilesArray]
            newTilesArray[i] = tileToUpdate

             setGameStatus(prevState => {
                return {
                    ...prevState,
                    tilesVisible: 2,
                    secondTileFlipped: i,
                    tilesArray: newTilesArray
                }
            })
        }
        if (gameStatus.tilesVisible === 2) {
            alert("click new")
        }
    }

    function newTurn() {
        if (gameStatus.tilesVisible === 2) {
            if (gameStatus.tilesArray[gameStatus.firstTileFlipped].color === gameStatus.tilesArray[gameStatus.secondTileFlipped].color) {
                console.log(gameStatus.totalPairsDiscovered + 1 + " match!")

                let newTilesArray = [...gameStatus.tilesArray]

                let tileToUpdate = gameStatus.tilesArray[gameStatus.firstTileFlipped]
                tileToUpdate = {...tileToUpdate, mode: "GONE"}
                newTilesArray[gameStatus.firstTileFlipped] = tileToUpdate

                tileToUpdate = gameStatus.tilesArray[gameStatus.secondTileFlipped]
                tileToUpdate = {...tileToUpdate, mode: "GONE"}
                newTilesArray[gameStatus.secondTileFlipped] = tileToUpdate

                setGameStatus(prevState => {
                return {
                    ...prevState,
                    tilesVisible: 0,
                    firstTileFlipped: "",
                    secondTileFlipped: "",
                    totalPairsDiscovered: prevState.totalPairsDiscovered + 1,
                    tilesArray: newTilesArray
                }
            })
            } else {
                console.log("try again")

                let newTilesArray = [...gameStatus.tilesArray]

                let tileToUpdate = gameStatus.tilesArray[gameStatus.firstTileFlipped]
                tileToUpdate = {...tileToUpdate, mode: "HIDDEN"}
                newTilesArray[gameStatus.firstTileFlipped] = tileToUpdate

                tileToUpdate = gameStatus.tilesArray[gameStatus.secondTileFlipped]
                tileToUpdate = {...tileToUpdate, mode: "HIDDEN"}
                newTilesArray[gameStatus.secondTileFlipped] = tileToUpdate

                setGameStatus(prevState => {
                return {
                    ...prevState,
                    tilesVisible: 0,
                    firstTileFlipped: "",
                    secondTileFlipped: "",
                    tilesArray: newTilesArray
                }
            })
            }
        }
        setGameStatus(prevState => {
            return {...prevState, tilesVisible: 0, firstTileFlipped: ""}
        })
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
