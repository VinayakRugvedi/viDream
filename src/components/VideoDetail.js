import React from 'react'

import '../styles/VideoDetail.scss'
import closeIcon from '../assets/removeIcon.svg'
import thumbnail from '../assets/bbcThumbnail.png'

import ReactPlayer from 'react-player'

class VideoDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      toPlay: false
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
          toPlay: false
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
              <button className="videoDetailPlayButton">PLAY</button>
              <button className="videoDetailAddToListButton">My List    </button>
            </div>
          </div>
          <div className="videoGlimpseInVideoDetail">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=MlRlgbrAVOs"
              width="100%"
              height="128%"
              playing={true}
              className="videoGlimpsePlayer"
              onStart={this.playVideoGlimpse}/>

            <div className="videoGlimpseModal">
              <img src={thumbnail} alt="THUMBNAIL"
                className="videoGlimpseThumbnail"
                style={{display: this.state.toPlay ? 'none' : true}}/>
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
