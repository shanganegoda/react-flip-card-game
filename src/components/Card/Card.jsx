import React, { useState } from 'react'
import './Card.css'

function Card({ word }) {

    const [flipped , setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped)
    }

    return (
        <div className={`card ${flipped ? "flipped" : "" }`} onClick={handleFlip}>
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
