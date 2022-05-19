import React from "react";
import "./counter.css"

export default function Counter(props) {
    return (
        <div className="counter--count">
            <h1>{props.number}</h1>
        </div>
    )
}