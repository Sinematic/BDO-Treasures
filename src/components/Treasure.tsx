import { v4 as uuidv4 } from 'uuid'
import "../styles/Treasure.css"
import Piece from './Piece'

export default function Treasure(props: { name: string, image: string, description: string, pieces: any }) {

    return (
        <div className="treasure">
            <h2>{props.name}</h2>
            <img src={props.image} />
            <p className="description">{props.description}</p>
            <ul className="pieces-list">
                {props.pieces.map((piece) => 
                    <Piece key={uuidv4()} name={piece.name} image={piece.image} odds={piece.drop_rate} />
                )}
            </ul>
        </div>
    )
}
