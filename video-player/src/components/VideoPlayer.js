import earth from "../assets/earth_18MG.mp4"
import {useState, useRef, useEffect} from "react";

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
    }

    return(<div>
            <video ref={video} width="600" src={earth}/>
            <div>
                <button onClick={handlePlayback}>{isPlaying ? "Pause" : "Play"}</button>
                <input type="range" value={currentTime} max={video.current.duration} onChange={handleSeek}/>
            </div>
        </div>);
}

export default VideoPlayer;