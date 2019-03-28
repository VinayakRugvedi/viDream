import React from 'react'

import '../styles/ThumbnailData.scss'
import playIcon from '../assets/playIcon.svg'
import eyeIcon from '../assets/eyeIcon.svg'
import slideDownArrow from '../assets/slideDownArrow.svg'
import speakerMuted from '../assets/speakerMuted.svg'
import speakerPlaying from '../assets/speakerPlaying.svg'
import likeIcon from '../assets/likeIcon.svg'
import dislikeIcon from '../assets/dislikeIcon.svg'
import addIcon from '../assets/addIcon.svg'
import removeIcon from '../assets/removeIcon.svg'

class ThumbnailData extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="thumbnailDataContainer" style={{display:true}}>
        <div className="videoViewsContainer">
          <img src={eyeIcon} alt="Views" className="eyeIcon"/>
          <span className="viewsCount"> { this.props.videoViews } </span>
        </div>
        <div className="playIconContainer">
          <img src={playIcon} alt="PLAY" className="playIcon"/>
        </div>
        <div className="videoTitle">
          { this.props.videoTitle }
        </div>
        <div className="videoDuration">
          { this.props.videoDuration.slice(2) }
        </div>

        <img src={slideDownArrow} alt="\\//" className="slideDownArrow"/>

        <div className="right">
          <img src={speakerMuted} alt="Muted" className="speakerIcon icons"/>
          <img src={likeIcon} alt="LIKE" className="likeIcon icons"/>
          <img src={dislikeIcon} alt="DisLIKE" className="dislikeIcon icons"/>
          <img src={addIcon} alt="ADD" className="addIcon icons"/>
        </div>
      </div>
    )
  }
}

export default ThumbnailData
