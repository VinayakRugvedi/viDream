import React from 'react'

import '../styles/Statistics.scss'
import viewIcon from '../assets/eyeIcon.svg'
import likeIcon from '../assets/likeIcon.svg'
import dislikeIcon from '../assets/dislikeIcon.svg'

function Statistics (props) {
  return (
    <div className="videoDetailStatistics">
      <div className="statisticHolder">
        <img src={viewIcon} alt="VIEW" className="statisticIcon"/>
        <div className="statisticCount">12345678</div>
      </div>
      <div className="statisticHolder">
        <img src={likeIcon} alt="LIKES" className="statisticIcon"/>
        <div className="statisticCount">12345678</div>
      </div>
      <div className="statisticHolder">
        <img src={dislikeIcon} alt="DISLIKES" className="statisticIcon"/>
        <div className="statisticCount">12345678</div>
      </div>
    </div>
  )
}

export default Statistics
