import React, { useState } from 'react'
import './Card.css'

function Card({ word , flipped ,  onClick}) {

    return (
        <div className={`card ${flipped ? "flipped" : "" }`}  onClick={onClick}>
            <div className="inner">
                <div className="front">
                </div>
                <div className="back">
                    <p>{word}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
