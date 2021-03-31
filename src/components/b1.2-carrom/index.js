import React from "react";
import "./style.css";

function Carrom() {
    return (
        <>
            <h2>Carrom</h2>
            <div className="carrom-container">
                <div className="box" id="a"></div>
                <div className="box" id="b"></div>
                <div className="box" id="c"></div>
                <div className="box" id="d"></div>
            </div>
        </>
    )
}

export default Carrom
