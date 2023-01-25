import React,{useState} from 'react'
import "../Styles/MusicPlayer.scss";
import { FaRegHeart,FaHeart ,FaStepBackward, FaBackward, FaPause, FaPlay, FaForward, FaStepForward, FaShareAlt} from 'react-icons/fa'
import {BsDownload} from 'react-icons/bs' 
import { useRef } from 'react';
 


const MusicPlayer = ({song,imgSrc}) => {
 
const [isPlaying,setPlaying]=useState(false);  
const [isLoved,setLoved]=useState(false);

 
const audioPlayer = useRef(); //audio tags
const progressBar = useRef();//progress bar
 

const changePlayPause=()=>{
  setPlaying(!isPlaying);
  if(!isPlaying){
    audioPlayer.current.play();
  }else{
    audioPlayer.current.pause();
  }
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
          <div className="currentTime">00.00</div>
          <input type="range" className='progressBar' ref={progressBar} />
          <div className="duration">00.00</div>
        </div>
    </div>
  </div> ;
}

export default MusicPlayer
