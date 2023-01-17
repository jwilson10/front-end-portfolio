import {useState, useRef} from "react";
import VideoPlayer from "./VideoPlayer";
import "./PlayerCard.css";

function PlayerCard(){

    return(<div className="playerCard">
        <VideoPlayer/>
    </div>)
}

export default PlayerCard;