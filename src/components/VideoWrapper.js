import React from 'react'

import VideoStrip from './VideoStrip'
import VideoDetail from './VideoDetail'

class VideoWrapper extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      toShowVideoDetail: false,
      videoInConcern: {}
    }
    // this.showVideoDetail = this.showVideoDetail.bind(this)
    this.closeVideoDetail = this.closeVideoDetail.bind(this)
  }

  showVideoDetail = (videoInConcern) => {
    console.log(videoInConcern)
    this.setState({
      videoInConcern
    }, () => {
      this.setState({
        toShowVideoDetail: true
      })
    })
  }

  closeVideoDetail () {
    this.setState({
      toShowVideoDetail: false
    })
  }

  render () {
    return (
      <>
        <VideoStrip apiKey={this.props.apiKey} category={this.props.item} getUpfrontVideo={this.props.getUpfrontVideo} showVideoDetail={this.showVideoDetail}
        toShowVideoDetail={this.state.toShowVideoDetail}/>
        {
          Object.keys(this.state.videoInConcern).length !== 0 ?
          <VideoDetail
            toShowVideoDetail={this.state.toShowVideoDetail}
            closeVideoDetail={this.closeVideoDetail}
            video={this.state.videoInConcern}/> : ''
        }
      </>
    )
  }
}

export default VideoWrapper
