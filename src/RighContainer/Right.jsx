import React from 'react'
import "../Styles/Right.scss";
import { FaBell, FaCogs, FaCrown, FaRegHeart, FaSun } from "react-icons/fa"

const Right = () => {
  return <div className="rightMenu">
    <div className="goPro">
      <i>
        <FaCrown />
        <p>
          Go <span>Pro</span>
        </p>
      </i>
      <i>
        <FaBell/>
      </i>
      <i>
        <FaRegHeart/>
      </i>
    </div>

    <div className="profile">
      <i>
        <FaSun/>
      </i>
      <i>
        <FaCogs/>
      </i>
      </div> 
  </div>;
}

export default Right
 