import React from 'react'

import '../styles/UpfrontVideo.scss'
import bbcThumbnail from '../assets/bbcThumbnail.png'
// import bbc from '../assets/bbc.mp4'
import addIcon from '../assets/addIcon.svg'
import playIcon from '../assets/playIcon.svg'
import speakerMutedIcon from '../assets/speakerMuted.svg'
import speakerPlayingIcon from '../assets/speakerPlaying.svg'

import ReactPlayer from 'react-player'

class UpfrontVideo extends React.Component {
  constructor () {
    super ()
    this.state = {
      apiURL: 'https://www.googleapis.com/youtube/v3/videos',
      upfrontVideo: {},
      mediaLoaded: false,
      muted: true,
      playerConfig: {
        youtube: {
          playerVars: {
            iv_load_policy: 3,
            rel: 0,
            start: 25,
            end: 46,
            controls: 0,
            disablekb: 1,
            autoplay: true
          }
        }
      }
    }
    this.mediaLoaded = this.mediaLoaded.bind(this)
    this.backToThumbnail = this.backToThumbnail.bind(this)
    this.toggleMute = this.toggleMute.bind(this)
  }

  mediaLoaded () {
    // setTimeout(() => {
      this.setState({
        mediaLoaded: true
      }, this.backToThumbnail())
    // }, 2000)
  }

  backToThumbnail () {
    setTimeout(() => {
      this.setState({
        mediaLoaded: false
      })
    }, 20000)
  }

  toggleMute () {
    this.setState({
      muted: !this.state.muted
    })
  }

  render () {
    let validThumbnail = this.props.upfrontVideo.videoThumbnails.maxres === undefined ?
                          this.props.upfrontVideo.videoThumbnails.medium.url :
                          this.props.upfrontVideo.videoThumbnails.maxres.url
    console.log(this.props.upfrontVideo.videoId);
    return (
      <div className="upfrontVideoContainer">
        {
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${this.props.upfrontVideo.videoId}`}
            volume={1}
            muted={this.state.muted}
            playing={true}
            width="100%"
            className="upfrontVideo"
            config={this.state.playerConfig}
            onStart={this.mediaLoaded}/>
        }
        <div className="upfrontVideoModal">
          <img src={validThumbnail} alt="THUMBNAIL" className="upfrontThumbnail" style={{display: this.state.mediaLoaded ? 'none' : true}}/>
        </div>
        <div className="upfrontVideoDataModal">
          <div className="upfrontVideoDataHolder">
            {
              // <div className="upfrontVideoCategory">
              //   Category of the videooo
              // </div>
            }
            <div className="upfrontVideoTitle">
              {this.props.upfrontVideo.videoTitle}
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

export default UpfrontVideo
