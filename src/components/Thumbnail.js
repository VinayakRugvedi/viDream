import React from 'react'

import '../styles/Thumbnail.scss'
import test from '../assets/footerLogo.svg'

class Thumbnail extends  React.Component {
  constructor (props) {
    super (props)
    this.state = {
      toPlay: false
    }
    this.showVideoGlimpse = this.showVideoGlimpse.bind(this)
    this.backToThumbnail = this.backToThumbnail.bind(this)
  }

  showVideoGlimpse (event) {
    // setTimeout((event) => {
      this.setState({
        toPlay: true
      })
    // }, 0)
  }

  backToThumbnail (event) {
    setTimeout(() => {
      this.setState({
        toPlay: false
      })
    }, 120)
  }

  render () {
    // console.log(this.state.toPlay);
    return (
      <div
        className="videoGlimpse"
        onMouseEnter={this.showVideoGlimpse}
        onMouseLeave={this.backToThumbnail}>
        <iframe
          title={this.props.video.videoTitle}
          src={`https://www.youtube.com/embed/${this.props.video.videoId}?controls=0&autoplay=${this.state.toPlay}`}
          frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
          className="shortClip"
          style={{display: this.state.toPlay ? true : 'none'}}>
        </iframe>
        <div className="videoThumbnailModal">
          <img
            src={this.props.video.videoThumbnails.medium.url} alt="THUMBNAIL"
            className="videoThumbnail"/>
        </div>
      </div>
    )
  }
}

export default Thumbnail
