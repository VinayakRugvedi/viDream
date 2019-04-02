import React from 'react'

import '../styles/VideoPlayer.scss'
import thumbnail from '../assets/bbcThumbnail.png'
import leftArrow from '../assets/leftArrow.svg'

import ReactPlayer from 'react-player'

class VideoPlayer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      toPlay: false,
      isPaused: true
    }
    this.startPlaying = this.startPlaying.bind(this)
    this.showBackToBrowse = this.showBackToBrowse.bind(this)
    this.hideBackToBrowse = this.hideBackToBrowse.bind(this)
    this.goBackToBrowse = this.goBackToBrowse.bind(this)
  }

  startPlaying () {
    this.setState({
      toPlay: true
    })
  }

  showBackToBrowse () {
    this.setState({
      isPaused: true
    })
  }

  hideBackToBrowse () {
    this.setState({
      isPaused: false
    })
  }

  goBackToBrowse () {

  }

  render () {
    return (
      <div className="videoPlayerHolder">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=9PGfL4t-uqE"
          width="100%"
          height="100%"
          controls="true"
          playing="true"
          className="videoPlayer"
          onReady={this.startPlaying}
          onPause={this.showBackToBrowse}
          onPlay={this.hideBackToBrowse}/>

          <div className="backToBrowse"
            style={{display: this.state.isPaused ? true : 'none'}}
            onClick={this.goBackToBrowse}>
            <img src={leftArrow} alt="BACK TO BROWSE ICON" className="leftArrowIcon"/>
            <div className="backToBrowseText">Back to Browse</div>
          </div>

        <div className="videoPlayerModal"
          style={{display: this.state.toPlay ? 'none' : true}}>
          <img src={thumbnail} alt="THUMBNAIL"
            className="videoPlayerThumbnail"/>
        </div>
      </div>
    )
  }
}

export default VideoPlayer
