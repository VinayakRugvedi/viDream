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
        <div className="statisticCount">
          { props.video.videoViews }
        </div>
      </div>
      <div className="statisticHolder">
        <img src={likeIcon} alt="LIKES" className="statisticIcon"/>
        <div className="statisticCount">
          { props.video.videoLikes }
        </div>
      </div>
      <div className="statisticHolder">
        <img src={dislikeIcon} alt="DISLIKES" className="statisticIcon"/>
        <div className="statisticCount">
          { props.video.videoDislikes }
        </div>
      </div>
    </div>
  )
}

export default Statistics
