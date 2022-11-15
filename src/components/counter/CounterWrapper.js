import React from "react";
import Counter from "./Counter";
import "./counter.css"

export default function CounterWrapper() {
    const [count, setCount] = React.useState(0)

    function subtract() {
        console.log("sub--")
        setCount(prevCount => prevCount - 1)
    }
    function add() {
        console.log("add++")
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <Counter number={count} />
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}
