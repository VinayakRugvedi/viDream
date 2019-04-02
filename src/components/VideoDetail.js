import React from 'react'

import '../styles/VideoDetail.scss'
import closeIcon from '../assets/removeIcon.svg'

class VideoDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
    this.closeVideoDetail = this.closeVideoDetail.bind(this)
  }

  closeVideoDetail () {
    // console.log('Herrr')
  }

  render () {
    return (
      <div className="videoDetailHolder">
        <div className="closeVideoDetail" onClick={this.closeVideoDetail}>
          <img src={closeIcon} alt="CLOSE" className="closeIcon"/>
        </div>
      </div>
    )
  }
}

export default VideoDetail
