import React from 'react'

import '../styles/VideoDetail.scss'
import closeIcon from '../assets/removeIcon.svg'
import thumbnail from '../assets/bbcThumbnail.png'
import playIcon from '../assets/playIconWhite.svg'
import addIcon from '../assets/addIcon.svg'
import removeIcon from '../assets/removeIcon.svg'

import Statistics from './Statistics'
import ReactPlayer from 'react-player'

class VideoDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      toPlay: false,
      autoPlay: true
    }
    this.closeVideoDetail = this.closeVideoDetail.bind(this)
    this.playVideoGlimpse = this.playVideoGlimpse.bind(this)
  }

  playVideoGlimpse () {
    this.setState({
      toPlay: true
    }, () => {
      setTimeout(() => {
        this.setState({
          toPlay: false,
          autoPlay: false
        })
      }, 10000)
    })
  }

  closeVideoDetail () {
    // console.log('Herrr')
  }

  render () {
    let validThumbnail = this.props.video.videoThumbnails.maxres === undefined ?
                          this.props.video.videoThumbnails.medium.url :
                          this.props.video.videoThumbnails.maxres.url
    return (
      <div className="videoDetailHolder" style={{display: this.props.toShowVideoDetail ? true : 'none'}}>
          <div className="videoDetailTextHolder">
            <div className="videoTitleHolder">
             { this.props.video.videoTitle }
            </div>
            <div className="videoDetailButtons">
              <button className="videoDetailPlayButton">
                <img src={playIcon} alt="PLAY" className="videoDetailPlayIcon"/>
                <div className="videoDetailButtonText">PLAY</div>
              </button>
              <button className="videoDetailAddToListButton">
                <img src={addIcon} alt="ADD TO LIST" className="videoDetailAddIcon"/>
                <div className="videoDetailButtonText">My List</div>
              </button>
            </div>
            <Statistics video={this.props.video}/>
          </div>
          <div className="videoGlimpseInVideoDetail">
            <ReactPlayer
              url={ `https://www.youtube.com/watch?v=${this.props.video.videoId}` }
              width="100%"
              height="128%"
              muted="true"
              playing={this.state.toPlay || this.state.autoPlay}
              className="videoGlimpsePlayer"
              onStart={this.playVideoGlimpse}/>

            <div className="videoGlimpseModal">
              <img src={validThumbnail} alt="THUMBNAIL"
                className="videoGlimpseThumbnail"
                style={{display: this.state.toPlay ? 'none' : true}}/>
              <div className="videoDetailShadow"></div>
            </div>
          </div>
        <div className="videoDetailTabs">
          <div className="videoDetailOverview tab">
            <div className="overviewText">
              <div className="tabText">Overview</div>
            </div>
          </div>
          <div className="videoDetailDescription tab">
            <div className="descriptionText tabText">
              <div className="tabText">Description</div>
            </div>
          </div>
        </div>
        <div className="closeVideoDetail" onClick={this.props.closeVideoDetail}>
          <img src={closeIcon} alt="CLOSE" className="closeIcon"/>
        </div>
      </div>
    )
  }
}

export default VideoDetail
