import { useRef, useEffect, useState } from "react";
import useSound from "use-sound";
import ainahau from "../assets/ainahau.mp3";
import papio_huli from "../assets/papio_huli.mp3";
import aloha_oe from "../assets/aloha_oe.mp3"
import { AiFillPlayCircle, AiFillPauseCircle, AiFillBackward, AiFillForward, AiFillStepForward, AiFillStepBackward } from "react-icons/ai";
import { BsFillVolumeMuteFill, BsFillVolumeDownFill, BsFillVolumeUpFill} from "react-icons/bs";
import { IconContext } from "react-icons";
import {Card, FormLabel} from "react-bootstrap";
import { createGlobalStyle } from 'styled-components';
import Form from 'react-bootstrap/Form';
import "./Player.css";

function Player(){
    const [isPlaying, setIsPlaying] = useState(false);
    const [playAudio1, {duration: durationAudio1, sound: soundAudio1} ] = useSound(ainahau);
    const [playAudio2, {duration: durationAudio2, sound: soundAudio2}] = useSound(papio_huli);
    const [playAudio3, {duration: durationAudio3, sound: soundAudio3}] = useSound(aloha_oe);
    const [time, setTime] = useState({min: '', sec: ''});
    const[currentTime, setCurrentTime] = useState(0);
    const[minSec, setMinSec] = useState({min: '00', sec: '00'});
    const[volume, setVolume] = useState(70);
    const[isMuted, setIsMuted] = useState(false);
    const[playlistSpot, setPlaylistSpot] = useState(0);
    const[playlist, setPlaylist] = useState([]);
    const [song1, setSong1] = useState({title: ':)', artist: ':(', moreInfo: '', duration: 0, releaseYear: '', imageUrl: '', sound: ''});
    const [song2, setSong2] = useState({title: '', artist: '', moreInfo: '', duration: 0, releaseYear: '', imageUrl: '', sound: ''});
    const [song3, setSong3] = useState({title: '', artist: '', moreInfo: '', duration: 0, releaseYear: '', imageUrl: '', sound: ''});
    const [currentSong, setCurrentSong] = useState({title: '', artist: '', moreInfo: '', duration: 0, releaseYear: '', imageUrl: '', sound: ''});
    const shouldUpdateCurrentTime = isPlaying && currentSong["sound"] && currentSong["sound"].seek([]) != currentTime;

    const updateTime = () => {
        if(currentSong["sound"]){
            setCurrentTime(currentSong["sound"].seek([]) * 1000);
        }
    }

    useEffect(() =>{
        if(soundAudio1 && durationAudio1){
            setSong1({
                title: "Āinahau",
                artist: "Irene West Royal Hawaiians",
                moreInfo: "https://www.loc.gov/item/jukebox-187674/",
                duration: durationAudio1,
                releaseYear: "1914",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Ainahau_-_Kaiulani%27s_House1.jpg/1024px-Ainahau_-_Kaiulani%27s_House1.jpg",
                sound: soundAudio1 
            });
        }
    }, [soundAudio1, durationAudio1]);

    useEffect(() => {
        if(soundAudio2 && durationAudio2){
            setSong2({
                title: "Pāpio Huli",
                artist: "Irene West Royal Hawaiians",
                moreInfo: "https://www.loc.gov/item/jukebox-11873/",
                duration: durationAudio2,
                releaseYear: "1914",
                imageUrl: "https://images.unsplash.com/photo-1633511089736-66deba25b8f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGF3YWlpJTIwZmlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
                sound: soundAudio2
            });
        }
    }, [soundAudio2, durationAudio2]);

    useEffect(() =>{
        if(soundAudio3 && durationAudio3){
            setSong3({
                title: "Aloha 'Oe",
                artist: "Liliuokalani",
                moreInfo: "https://en.wikipedia.org/wiki/Aloha_%CA%BBOe",
                duration: durationAudio3,
                releaseYear: 1911,
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Liliuokalani%2C_c._1891.jpg/800px-Liliuokalani%2C_c._1891.jpg",
                sound: soundAudio3
            });
        }
    }, [soundAudio3, durationAudio3]);

    useEffect(() =>{
        if(soundAudio1 && soundAudio2 && soundAudio3){
            setPlaylist([song1, song2, song3]);
        }
    }, [song1, song2, song3]);

    useEffect(() => {
        if(playlist && playlist[playlistSpot]){
            setCurrentSong(playlist[playlistSpot]);
            if(currentSong["sound"]){
                currentSong["sound"].volume(volume / 100);
                setCurrentTime(0);
            }
        }
    },[playlist, playlistSpot]);

    useEffect(() =>{
        if(currentSong["sound"]){
            if(isPlaying){
                currentSong["sound"].volume(volume / 100);
                setIsPlaying(true);
                currentSong["sound"].play();
            }
        }
    }, [currentSong["sound"]]);

    useEffect(() =>{
        if(currentSong["sound"]){
            setTime(minSecConverter(currentSong["duration"]));
        }
    }, [currentSong["duration"]]);

    useEffect(() => {
        if(currentSong){
            setMinSec(minSecConverter(currentTime));
        }
    }, [currentTime]);

    useEffect(() => {
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, [isPlaying, currentTime]);

    const minSecConverter = (milliTime) => {
        let totalMin = `${parseInt(milliTime/ 60000)}`;
        if(parseInt(totalMin) < 10){
            totalMin = "0" + totalMin;
        }
        let totalSec = `${parseInt((milliTime / 1000)) % 60}`;
        if(parseInt(totalSec) < 10){
            totalSec = "0" + totalSec;
        }
        return {min: totalMin, sec: totalSec};
    }

    const handleSeek = (evt) => {
        if(currentSong["sound"]){
            currentSong["sound"].seek(evt.target.value / 1000);
            setCurrentTime(evt.target.value);
        }
    }

    const handleVolume = (evt) => {
        if(currentSong["sound"]){
            setVolume(evt.target.value);
            currentSong["sound"].volume(evt.target.value / 100);
        }
    }

    const fastFoward = () =>{
        if(currentSong["sound"]){
            currentSong["sound"].seek((currentTime / 1000) + 10);
            setCurrentTime(currentSong["sound"].seek([]) * 1000 + 10);
        }
    }

    const rewind = () => {
        if(currentSong["sound"]){
            currentSong["sound"].seek((currentTime / 1000) - 10);
            setCurrentTime(currentSong["sound"].seek([]) * 1000 + 10);
        }
    }

    const handleMute = () =>{
        if(!isMuted && currentSong["sound"]){
            setIsMuted(true);
            currentSong["sound"].volume(0);
        } else if(isMuted && currentSong["sound"]){
            setIsMuted(false);
            currentSong["sound"].volume(volume / 100);
        }
    }

    const nextSong = () =>{
        currentSong["sound"].stop();
        if(playlistSpot + 1 < playlist.length){
            setPlaylistSpot(playlistSpot + 1);
        } else{
            setPlaylistSpot(0);
        }
    }


    function playingButton(){
        if(isPlaying){
            currentSong["sound"].pause();
            setIsPlaying(false);
        } else{
            currentSong["sound"].play();
            setIsPlaying(true);
        }
    }

    return(
        <div className="player">
            <div className="component">
                <h2>Playing Now</h2>
            <img
                className="musicCover"
                src={currentSong["imageUrl"]}
            />
            <div>
                <a href={currentSong["moreInfo"] ? currentSong["moreInfo"] : ''} target="_blank"><h3 className="title">{currentSong["title"]}</h3></a>
                <p className="subTitle">{currentSong["artist"]}</p>
            </div>
            <div className="timelineDiv">
                <div className="label">
                    <div>{minSec.min}:{minSec.sec}</div>
                    <div>{time.min}:{time.sec}</div>
                </div>
                <Form.Range className="timeline" name="timeline" min={0} max={currentSong["duration"]} value={currentTime} onChange={handleSeek} step="1"/>
            </div>
            <div className="buttonDiv">  
                <button className="lastSong" onClick={rewind}>
                    <div className="tooltip previous" data-tooltip="Previous">
                        <IconContext.Provider value={{size: "3em", color:"#27AE60" }}>
                            <div className="btnHelper">
                                <AiFillStepBackward/>
                            </div>
                        </IconContext.Provider>
                    </div>
                </button> 
                <button className="rwButton" onClick={rewind}>
                    <div className="tooltip" data-tooltip="-10s">
                        <IconContext.Provider value={{size: "3em", color:"#27AE60"}}>
                            <div className="btnHelper">
                                <AiFillBackward/>
                            </div>
                        </IconContext.Provider>
                    </div>
                </button> 
                <button className="playButton" onClick={playingButton} /*title={!isPlaying ? "Play" : "Pause"}*/ >
                    <div className="tooltip playPause" data-tooltip={!isPlaying ? "Play" : "Pause"}>
                        <IconContext.Provider value={{ size: "4.2em" }}>
                                <div className="btnHelper">
                                {!isPlaying ? <AiFillPlayCircle /> : <AiFillPauseCircle />}
                                </div>
                        </IconContext.Provider>
                    </div>
                </button>
                <button className="ffButton" onClick={fastFoward}>
                    <div className="tooltip" data-tooltip={"+10s"}>
                        <IconContext.Provider value={{size: "3em", color:"#27AE60" }}>
                            <div className="btnHelper">
                                <AiFillForward/>
                            </div>
                        </IconContext.Provider>
                    </div>
                </button>
                <button className="nextSong" onClick={nextSong}>
                    <div className="tooltip" data-tooltip={"Next"}>
                        <IconContext.Provider value={{size: "3em", color:"#27AE60" }}>
                            <div className="btnHelper">
                                <AiFillStepForward/>
                            </div>
                        </IconContext.Provider>
                    </div>
                </button> 
            </div>
            <div className="bottom">
                <div className="bottomLeft" title={"Current Volume: " + volume} >
                    <button className="volButton" title={volume > 0?"Mute" : "Turn Volume On"} onClick={handleMute}>
                        <div className="tooltip isMuted" data-tooltip={isMuted ? "Unmute" : "Mute"}>
                            <IconContext.Provider value={{size:"2.5em", color:"bisque"}}>
                                <div className="btnHelper">
                                    {isMuted || volume == 0 ? <BsFillVolumeMuteFill /> : currentSong["sound"] && currentSong["sound"].volume() < .5 ? <BsFillVolumeDownFill /> : <BsFillVolumeUpFill />}
                                </div>
                            </IconContext.Provider>
                        </div>
                    </button>
                    <div className="timelineDiv">
                        <div className="volLabel">
                                <div>Volume:</div>
                                <div>{volume}</div>
                            </div>
                            <Form.Range className="volume" name="volume" min={0} max={100} value={volume} onChange={handleVolume} step="1" />
                    </div>
                </div>
                <div className="bottomRight">
                    <div>
                        Up Next:<br/>{playlist[playlistSpot] ? playlistSpot + 1 < playlist.length ? playlist[playlistSpot + 1].title : playlist[0].title : ''}
                    </div>
                </div>
            </div>
            </div>
            </div>
    );
}

export default Player;