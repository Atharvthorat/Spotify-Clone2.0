import React from 'react'
import {FaDesktop} from "react-icons/fa"
import {BsFillVolumeUpFill,BsMusicNoteList} from "react-icons/bs"
import track from "../assets/track.png"


const TrackList = () => {
  return  <div className="trackList">
    <div className="top">
        <img src={track}  />
        <p>Sample names <span>Artist</span> </p>
    </div>
    <div className="bottom">
        <i><BsFillVolumeUpFill/> </i>
         
        <input className='slider' type="range" />
        <i><BsMusicNoteList/></i>
        <i><FaDesktop/></i>
        
    </div>
  </div>
      
    
}

export default TrackList;
