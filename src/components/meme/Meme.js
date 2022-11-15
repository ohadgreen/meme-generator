import React, { useState, userEffect } from "react"
import { useEffect } from "react"
import Layout from "../layout"
import "./meme.css"
import memesData from "./MemesData"

export default function Meme() {

    const [myMeme, setMyMeme] = useState({
        topText: '',
        bottomText: '',
        memeUrl: 'http://i.imgflip.com/1bij.jpg'
        // allMemes: memesData.data.memes
    })

    const [allMemes, setAllMemes] = useState([])
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(allMemesResponse => setAllMemes(allMemesResponse.data.memes))
    }, [])

    function getRandomMemeData() {
        const rand = Math.floor(Math.random() * allMemes.length)
        return allMemes[rand]
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
        <Layout >
            <main>
                <div className="form">
                    <input
                        name="topText"
                        id="topText"
                        value={myMeme.topText}
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                        onChange={(e) => setMyMeme({ ...myMeme, topText: e.target.value })}
                    />
                    <input
                        name="bottomText"
                        id="bottomText"
                        value={myMeme.bottomText}
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                        onChange={(e) => setMyMeme({ ...myMeme, bottomText: e.target.value })}
                    />
                    <button
                        className="form--button"
                        onClick={handleSubmit}
                    >
                        Get a New Meme Image
                    </button>
                </div>
                <div className="meme">
                <h2 className="meme--text top">{myMeme.topText}</h2>
                <h2 className="meme--text bottom">{myMeme.bottomText}</h2>
                <img className="meme--image" src={myMeme.memeUrl} />
                </div>
            </main>
        </Layout>
    )
}