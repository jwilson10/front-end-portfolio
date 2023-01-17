import earth from "../assets/earth_18MG.mp4";
import {useState, useRef, useEffect} from "react";
import {FaPlay, FaPause} from "react-icons/fa";
import { IconContext } from "react-icons";
import "./VideoPlayer.css";

function VideoPlayer(){
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const video = useRef(earth);

    useEffect(() =>{
        const interval = setInterval(() =>{
            setCurrentTime(video.current.currentTime);
        }, 1000);
        return () => clearInterval(interval);
    }, [isPlaying]);


    const handlePlayback = () =>{
        if(isPlaying){
            video.current.pause();
            setIsPlaying(false);
        } else{
            video.current.play();
            setIsPlaying(true);
        }
        
    }

    const handleSeek = (evt) =>{
        video.current.currentTime = evt.target.value;
        setCurrentTime(evt.target.value);
        if(isPlaying){
            video.current.play();
        }
    }

    return(<div className="entireVideoPlayer">
                <div id="videoWrapper">
                <video id="video" ref={video} width="600" src={earth}/>
                <div id="videoOverlay">
                    <button onClick={handlePlayback} id="playButton">
                        <IconContext.Provider value={{ size: "2em", color:"white"}}>
                            {isPlaying ? <FaPause/>: <FaPlay/>}
                        </IconContext.Provider>
                    </button>
                    <input id="timeline" type="range" min="0" value={currentTime} max={video.current.duration} onChange={handleSeek}/>
                </div>
            </div>
        </div>);
}

export default VideoPlayer;