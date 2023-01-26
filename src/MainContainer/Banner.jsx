import React from 'react'
import Artist from "../assets/artist.png";
import Check from "../assets/check.png";
import {FaEllipsisH,FaHeadphones,FaCheck} from "react-icons/fa"


const Banner = () => {
  return <div className="banner">
    <img className='bannerartist' src={Artist} alt="" />
    <div className="content">
      <div className="breadCrump">
        <p>Home <span>/Popular User</span>
        </p>

        <i><FaEllipsisH/></i>

      </div>
      <div className="artist">
         <div className="left">
          <div className="name">
            <h2>Atharv Thorat</h2>
            <img src={Check} alt="" />

          </div>
          <p>
            <i><FaHeadphones/></i>
            28,399,259 <span>Monthly playlist Listeners</span>
          </p>
         </div>
         <div className="right">
          <a href="a">Play</a>
          <a href="a"><i><FaCheck/></i>Following</a>
                </div>
      </div>
    </div>

    <div className="bottomLayer">

    </div>
  </div> ; 
}

export default Banner
