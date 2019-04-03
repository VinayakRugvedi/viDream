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
    return (
      <div className="videoDetailHolder">
          <div className="videoDetailTextHolder">
            <div className="videoTitleHolder">
[master fe51332] Add basic styles to Video Detail component to start with?
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
            <Statistics/>
          </div>
          <div className="videoGlimpseInVideoDetail">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=MlRlgbrAVOs"
              width="100%"
              height="128%"
              playing={this.state.toPlay || this.state.autoPlay}
              className="videoGlimpsePlayer"
              onStart={this.playVideoGlimpse}/>

            <div className="videoGlimpseModal">
              <img src={thumbnail} alt="THUMBNAIL"
                className="videoGlimpseThumbnail"
                style={{display: this.state.toPlay ? 'none' : true}}/>
              <div className="videoDetailShadow"></div>
            </div>
          </div>
        <div className="videoDetailTabs">
          <div className="videoDetailOverview">
            Overview
          </div>
          <div className="videoDetailDescription">
            Description
          </div>
        </div>
        <div className="closeVideoDetail" onClick={this.closeVideoDetail}>
          <img src={closeIcon} alt="CLOSE" className="closeIcon"/>
        </div>
      </div>
    )
  }
}

export default VideoDetail
