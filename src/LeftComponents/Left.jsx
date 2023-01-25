import React from 'react'
import "../Styles/Left.scss";
import {FaSpotify, FaEllipsisH} from "react-icons/fa"
import {BiSearch} from "react-icons/bi";
import Menu from './Menu';
import MenuList from './MenuList';
import MenuPlayList from './MenuPlayList';
import TrackList from './TrackList';




const Left = () => {
  return (
    <div className='leftmenu'>
     <div className="logoContainer">
      <i><FaSpotify/></i>
      <h2>Spotify</h2>
      <i><FaEllipsisH/></i>
      </div> 
      <div className="searchBox">
        <input type="text" placeholder='Search..' />
      <i className='searchBoxIcon'> <BiSearch/></i> 
      </div>

    <Menu title={'Menu'} menuObject={MenuList}/>
    <MenuPlayList/>
    <TrackList/>
    </div>
  )
}

export default Left
