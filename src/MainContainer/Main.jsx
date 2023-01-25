import React from 'react'
import { FaUser, FaUsers } from 'react-icons/fa';
import '../Styles/Main.scss'
import Banner from './Banner';
import  AudioList from "./AudioList"

const Main = () => {
  return   <div className='mainContainer'>


  <Banner/>

    <div className="menuList" >
      <ul  >
        <li >
          <a href="#">Popular</a>
        </li>
        <li>
          <a href="#">Albums</a>
        </li>
        <li>  
          <a href="#">Songs</a>
        </li>
        <li>
          <a href="#">Fans</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>

      <p>
        <i><FaUsers /></i>12.3M <span>Followers</span>
      </p>
    </div>

    <AudioList/>
 
    </div>;
  
}

export default Main
