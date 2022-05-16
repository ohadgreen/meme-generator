import React, { useState } from "react"
import "./meme.css"
import memesData from "./MemesData"
import troll from "../header/troll-img.png";

export default function Meme() {

    const [myMeme, setMyMeme] = useState({
        topText: '',
        bottomText: '',
        memeUrl: '',
        allMemes: memesData.data.memes
    })

    function getRandomMemeData() {
        const memesArray = memesData.data.memes
        const rand = Math.floor(Math.random() * memesArray.length)
        let randomMeme = memesArray[rand]
        return randomMeme
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        let randomMeme = getRandomMemeData()
        console.log(`top: ${myMeme.topText} bottom: ${myMeme.bottomText} url: ${randomMeme.url}`)
        setMyMeme(prevState => {
            return {
                ...prevState,
                topText: '',
                bottomText: '',
                memeUrl: randomMeme.url
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input
                    name="topText"
                    id="topText"
                    value={myMeme.topText}
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    onChange={(e) => setMyMeme({...myMeme, topText: e.target.value})}
                />
                <input
                    name="bottomText"
                    id="bottomText"
                    value={myMeme.bottomText}
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={(e) => setMyMeme({...myMeme, bottomText: e.target.value})}
                />
                <button
                    className="form--button"
                    onClick={handleSubmit}
                >
                    Get a New Meme Image
                </button>
            </div>
            <h2>{myMeme.topText}</h2>
            <img src={ myMeme.memeUrl } className="meme--image"/>
            <h2>{myMeme.bottomText}</h2>

        </main>
    )
}