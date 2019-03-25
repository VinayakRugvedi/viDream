import React from 'react'

import '../styles/UpfrontVideo.scss'
import bbcThumbnail from '../assets/bbcThumbnail.png'
import bbc from '../assets/bbc.mp4'

class UpfrontVideo extends React.Component {
  constructor () {
    super ()
    this.state = {
      playerLoaded: false
    }
    this.playerLoaded = this.playerLoaded.bind(this)
  }

  playerLoaded () {
    setTimeout(() => {
      this.setState({
        playerLoaded: true
      }, this.backToThumbnail())
    }, 2000)
  }

  backToThumbnail () {
    setTimeout(() => {
      this.setState({
        playerLoaded: false
      })
    }, 20800)
  }

  render () {
    return (
      <div className="upfrontVideoContainer">
        {
          <iframe
            className="upfrontVideo"
            src="https://www.youtube.com/embed/c8aFcHFu8QM?controls=0&autoplay=true&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&rel=0&start=25&end=48"
            onLoad={this.playerLoaded}
            frameBorder="0">
          </iframe>
        }
        <div className="upfrontVideoModal">
          <img src={bbcThumbnail} alt="THUMBNAIL" className="upfrontThumbnail" style={{display: this.state.playerLoaded ? 'none' : true}}/>
        </div>
      </div>
    )
  }
}

export default UpfrontVideo
