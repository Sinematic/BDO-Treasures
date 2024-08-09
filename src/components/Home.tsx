import Treasures from "../assets/treasures.json"
import { v4 as uuidv4 } from 'uuid'
import Treasure from "./Treasure"
import "../styles/Home.css"

export default function Home() {

    const treasures =  Treasures.treasures

    return (
        <div className="container">
            <h1>Black Desert's Treasures</h1>
            {treasures.map((treasure) => <Treasure key={uuidv4()} name={treasure.name} image={treasure.image} description={treasure.description} pieces={treasure.pieces} />)}
            {/*treasures[0].pieces.map((piece) => 
            <li key={uuidv4()}>
                <img src={piece.image}/>
            </li>)
            */}
        </div>
    )
}
