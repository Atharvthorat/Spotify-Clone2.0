import React from 'react'
import {BsMusicNoteList,BsTrash} from  "react-icons/bs";
import {FaPlus} from "react-icons/fa"
import { PlayLists } from './PlayLists';

const MenuPlayList = () => {
  return <div className="playListContainer">
    <div className="nameContainer">
        <p>PlayList</p>
        <i><FaPlus/></i>
    </div>
    <div className="playListScroll">
      {
        PlayLists && PlayLists.map((i)=>(
         <> 
         <div className="playList" key={i.id} >
         <i className='list'>
          <BsMusicNoteList/>
         </i>
         <p>{i.name}</p>
         <i className='trash'> 
          <BsTrash/>
         </i>
         </div>
         </>
        ))
           
      }
  
    </div>
  
  </div>
};

export default MenuPlayList
 