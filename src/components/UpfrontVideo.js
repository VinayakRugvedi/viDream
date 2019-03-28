import React from 'react'

import '../styles/UpfrontVideo.scss'
import bbcThumbnail from '../assets/bbcThumbnail.png'
import bbc from '../assets/bbc.mp4'
import addIcon from '../assets/addIcon.svg'
import playIcon from '../assets/playIcon.svg'
import speakerMutedIcon from '../assets/speakerMuted.svg'
import speakerPlayingIcon from '../assets/speakerPlaying.svg'

import ReactPlayer from 'react-player'

class UpfrontVideo extends React.Component {
  constructor () {
    super ()
    this.state = {
      playerLoaded: false,
      muted: true,
      playerConfig: {
        youtube: {
          playerVars: {
            iv_load_policy: 3,
            rel: 0,
            start: 25,
            end: 48,
            controls: 0,
            disablekb: 1,
            autoplay: true
          }
        }
      }
    }
    this.playerLoaded = this.playerLoaded.bind(this)
    this.backToThumbnail = this.backToThumbnail.bind(this)
    this.toggleMute = this.toggleMute.bind(this)
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

  toggleMute () {
    this.setState({
      muted: !this.state.muted
    })
  }

  render () {
    return (
      <div className="upfrontVideoContainer">
        {
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=c8aFcHFu8QM`}
            volume={0.5}
            muted={this.state.muted}
            playing={true}
            width='100%'
            className="upfrontVideo"
            config={this.state.playerConfig}
            onReady={this.playerLoaded}/>
        }
        <div className="upfrontVideoModal">
          <img src={bbcThumbnail} alt="THUMBNAIL" className="upfrontThumbnail" style={{display: this.state.playerLoaded ? 'none' : true}}/>
        </div>
        <div className="upfrontVideoDataModal">
          <div className="upfrontVideoDataHolder">
            <div className="upfrontVideoCategory">
              Category of the videooo
            </div>
            <div className="upfrontVideoTitle">
              Some random video Title
            </div>
          </div>
          <div className="upfrontVideoButtons">
            <button className="playButton">
              <div className="upfrontVideoPlayButtonContent">
                <img src={playIcon} alt="PLAY" className="upfrontVideoPlayIcon"/>
                <div className="upfrontVideoButtonText">Play</div>
              </div>
            </button>
            <button className="addToListButton">
              <div className="upfrontVideoAddButtonContent">
                <img src={addIcon} alt="ADD" className="upfrontVideoAddIcon"/>
                <div className="upfrontVideoButtonText">My List</div>
              </div>
            </button>
          </div>
        </div>
        <div className="upfrontVideoToggleMute">
          <img src={speakerMutedIcon} alt="MUTED"
            className="upfrontVideoSpeakerIcon"
            style={{display: this.state.muted ? true : 'none'}}
            onClick={this.toggleMute}/>

          <img src={speakerPlayingIcon} alt="PLAYING"
            className="upfrontVideoSpeakerIcon"
            style={{display: this.state.muted ? 'none' : true}}
            onClick={this.toggleMute}/>
        </div>
      </div>
    )
  }
}

// <iframe
//   className="upfrontVideo"
//   src="https://www.youtube.com/embed/c8aFcHFu8QM?controls=0&autoplay=true&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&rel=0&start=25&end=48"
//   onLoad={this.playerLoaded}
//   frameBorder="0">
// </iframe>

export default UpfrontVideo
