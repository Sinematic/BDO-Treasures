import { useState } from "react"
import "../styles/Piece.css"

export default function Piece( props: { name: string, image: string, odds: number | string }) {

    const [isClicked, setIsClicked] = useState(false)

    return (

        <div className="piece" onClick={() => setIsClicked(!isClicked)}>
            {!isClicked ? 
                <img src={props.image} /> 
            :
                <div className="piece-alt-content">
                    <p className="piece-name">{props.name}</p>
                    <p className="odds">{props.odds ? props.odds  + "%" : "Unknown odds" }</p>
                </div>
            }
        </div>
    )
}
