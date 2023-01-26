import React,{useState} from 'react'
import "../Styles/MusicPlayer.scss";
import { FaRegHeart,FaHeart ,FaStepBackward, FaBackward, FaPause, FaPlay, FaForward, FaStepForward, FaShareAlt} from 'react-icons/fa'
import {BsDownload} from 'react-icons/bs' 
import { useRef ,useEffect} from 'react';
 


const MusicPlayer = ({song,imgSrc}) => {
 
const [isPlaying,setPlaying]=useState(false);  
const [isLoved,setLoved]=useState(false);
const [duration,setDuration]=useState(0);
const [currentTime,SetCurrentTime]=useState(0)
const animationRef = useRef();
 
const audioPlayer = useRef(); //audio tags
const progressBar = useRef();//progress bar
 

useEffect(()=>{
    const seconds = Math.floor(audioPlayer.current.duration);

    setDuration(seconds);

},[
  audioPlayer?.current?.loadedmetadata,
  audioPlayer?.current?.readyState,
]);

const changePlayPause=()=>{

  const prevValue = isPlaying;
  if(!prevValue){
    audioPlayer.current.play();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }else{
    audioPlayer.current.pause();
    cancelAnimationFrame(animationRef.current);
  }
  setPlaying(!prevValue);
};

const whilePlaying =()=>{
  progressBar.current.value = audioPlayer.current.currentTime;
  changeCurrentTime();
  animationRef.current = requestAnimationFrame(whilePlaying);
};

const changeCurrentTime=()=>{
  progressBar.current.style.setProperty('--player-played', `${(progressBar.current.vlaue / duration)*100}%` );
  SetCurrentTime(progressBar.current.value);
}

const changeProgress =()=>{
   audioPlayer.current.currentTime = progressBar.current.value;
  changeCurrentTime()
    
};


const calculateTime =(sec)=>{
  const minutes=Math.floor(sec/60);
  //10 -> 09 or 11 ,12
  const returnMin = minutes <10 ? `0${minutes}` : `${minutes}`;
  const seconds =Math.floor(sec%60);
  const returnSec = seconds <10 ? `0${seconds}` : `${seconds}`;

  return `${returnMin}:${returnSec}`;
}





 const changeLoved =()=>{
    setLoved(!isLoved);
    
}
 


return <div className="musicPlayer">
    <div className="songImg">
        <img src={imgSrc}  />
    </div>
    <div className="songAttr">
        <audio src={song} preload='metadata' ref={audioPlayer} />
        <div className="top">
            <div className="left"> 
                <div className="loved"  onClick={changeLoved}>
                {
                isLoved ? (
                <i><FaRegHeart/></i>
                )
                :(
                <i><FaHeart/></i>
                )}
                </div>
                <div className="download">
                  <i><BsDownload/></i>
                </div>
            </div>
            <div className="middle">
              <div className="back">
              <i>
                 <FaStepBackward/>
               </i>
               <i>
                <FaBackward/>
               </i>
              </div>
              <div className="playPause" onClick={changePlayPause} >
                      {
                        isPlaying ? <i><FaPause/></i>
                         :
                          <i><FaPlay/></i>
                      }
              </div>
              <div className="forward">
                        <i><FaForward/></i>
                        <i><FaStepForward/></i>
              </div>
              
            </div>
            <div className="right">
              <i><FaShareAlt/> </i>
            </div>
        </div>
        <div className="bottom">
          <div className="currentTime">{calculateTime(currentTime)}</div>
          <input type="range" className='progressBar' ref={progressBar} onChange={changeProgress} />
          <div className="duration">{duration && !NaN(duration) && calculateTime(duration) ?
          calculateTime(duration):
          "00.00"}</div>
        </div>
    </div>
  </div> ;
}

export default MusicPlayer
