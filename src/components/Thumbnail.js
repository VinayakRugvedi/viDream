import React from 'react'

import '../styles/Thumbnail.scss'
import test from '../assets/footerLogo.svg'
import ThumbnailData from './ThumbnailData'

import ReactPlayer from 'react-player'

class Thumbnail extends  React.Component {
  constructor (props) {
    super (props)
    this.state = {
      toPlay: false,
      showModalData: false,
      toShowHighlight: false,
      muted: true,
      playerConfig: {
        youtube: {
          playerVars: {
            iv_load_policy: 3,
            rel: 0,
            start: 5,
            end: 25,
            controls: 0
          }
        }
      }
    }
    this.showVideoGlimpse = this.showVideoGlimpse.bind(this)
    this.backToThumbnail = this.backToThumbnail.bind(this)
    this.showThumbnailData = this.showThumbnailData.bind(this)
    this.toggleMute = this.toggleMute.bind(this)
    // this.sendVideoDetail = this.sendVideoDetail.bind(this)
  }

  showVideoGlimpse (event) {
    if (!this.props.toShowVideoDetail)
      this.setState({
        toPlay: true,
        showModalData: true
      })
  }

  backToThumbnail (event) {
      this.setState({
        toPlay: false
      })
  }

  showThumbnailData (event) {
    if (this.state.toPlay === true)
      this.setState({
        showModalData: true
      })
  }

  toggleMute () {
    this.setState({
      muted: !this.state.muted
    })
  }

  sendVideoDetail = (videoId) => {
    console.log(videoId)
    console.log(this.props.video.videoId)
    // if (videoId === this.props.videoId)
    // this.setState({
    //   toShowHighlight: true
    // }, () =>
    this.props.showVideoDetail(this.props.video)
  // )
    // else
    //   this.setState({
    //     toShowHighlight: false
    //   })
  }

  render () {
    return (
      <>
      <div
        className={"thumbnailVideoGlimpse " + (this.props.toShowVideoDetail ? " " : "activateHover")}
        onMouseEnter={this.showVideoGlimpse}
        onMouseLeave={this.backToThumbnail}
        onMouseMove={this.showThumbnailData}>

        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${this.props.video.videoId}`}
          volume={1}
          muted={this.state.muted}
          playing={this.state.toPlay}
          width="140%"
          className="shortClip"
          style={{display: this.state.toPlay ? true : 'none'}}
          config={this.state.playerConfig}/>

        <div className="videoThumbnailModal">
          <img
            src={this.props.video.videoThumbnails.medium.url} alt="THUMBNAIL"
            className="videoThumbnail"/>
        </div>
        <div className="thumbnailDataModal"
          style={{display: this.state.toPlay ? true : 'none'}}>
          <ThumbnailData
            video={this.props.video}
            videoId={this.props.video.videoId}
            videoTitle={this.props.video.videoTitle}
            videoDuration={this.props.video.videoDuration}
            videoViews={this.props.video.videoViews}
            toPlay={this.state.toPlay}
            muted={this.state.muted}
            toggleMute={this.toggleMute}
            showModalData={this.state.showModalData}
            showVideoDetail={this.props.showVideoDetail}
            sendVideoDetail={this.sendVideoDetail}/>
        </div>
      </div>
      <div className={"highlight " + (this.props.videoInConcernId === this.props.video.videoId ? "showHighlightBorder" : "")} style={{display: this.props.toShowVideoDetail ? 'initial' : 'none'}}
      onClick={() => this.sendVideoDetail(this.props.video.videoId)}>
      </div>
      </>
    )
  }
}

export default Thumbnail
