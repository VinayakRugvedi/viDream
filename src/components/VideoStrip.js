import React from 'react'

import '../styles/VideoStrip.scss'
import thumbnail from '../assets/thumb.jpeg'

class VideoStrip extends React.Component {
  constructor () {
    super ()
    this.playVideo = this.playVideo.bind(this)
    this.backToThumbnail = this.backToThumbnail.bind(this)
  }

  playVideo (event) {
    console.log(event.target)
    // event.target.style.animation = 'zoomOut 0.3s ease 0.3s forwards'
  }

  backToThumbnail (event) {
    // event.target.style.animation = 'zoomOut 0.3s ease 0.3s reverse'
  }

  render () {
    return (
      <div className="videoStripContainer">
        <h1 className="videoCategoryHeader">
          Hello World
        </h1>
        <div className="videoThumbnailContainer">
          <div className="videoThumbnail">
            <img src={thumbnail} alt="videoThumbnail"/>
          </div>
          <div className="videoThumbnail">
            <img src={thumbnail} alt="videoThumbnail"/>
          </div>
          <div className="videoThumbnail special">
            <img src={thumbnail} alt="videoThumbnail"/>
          </div>
          <div className="videoThumbnail">
            <img src={thumbnail} alt="videoThumbnail"/>
          </div>
          <div className="videoThumbnail">
            <img src={thumbnail} alt="videoThumbnail"/>
          </div>
          <div className="videoThumbnail">
            <img src={thumbnail} alt="videoThumbnail"/>
          </div>
          <div className="videoThumbnail">
            <img src={thumbnail} alt="videoThumbnail"/>
          </div>
        </div>
      </div>
    )
  }
}

export default VideoStrip
