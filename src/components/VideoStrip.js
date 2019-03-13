import React from 'react'

import '../styles/VideoStrip.scss'
import thumbnail from '../assets/thumb.jpeg'

class VideoStrip extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      apiURL: 'https://www.googleapis.com/youtube/v3/videos',
      categoryVideosList: {
        categoryVideosListEtag: '',
        videos: []
      }
    }
    this.getThumbnails = this.getThumbnails.bind(this)
  }

  componentDidMount () {
    fetch(`${this.state.apiURL}?key=${this.props.apiKey}&part=snippet&chart=mostPopular&maxResults=24&videoCategoryId=${this.props.category.categoryId}`)
    .then(response => response.json())
    .then(categoryVideosDetail => {
      let categoryVideosList = {
        categoryVideosListEtag: categoryVideosDetail.etag,
        videos: []
      }
      for (let item of categoryVideosDetail.items) {
        categoryVideosList.videos.push({
          etag: item.etag,
          videoId: item.id,
          channelId: item.snippet.channelId,
          videoTitle: item.snippet.title,
          videoDescription: item.snippet.description,
          videoThumbnails: item.snippet.thumbnails
        })
      }

      this.setState({
        categoryVideosList
      })
    })
    .catch(console.log)
  }

  getThumbnails () {
    console.log(this.state.categoryVideosList.videos)
    let thumbnails
    if (this.state.categoryVideosList.videos.length !== 0) {
      thumbnails = this.state.categoryVideosList.videos.map((video, index) => {
        return (
          <div className="videoThumbnail">
            <img src={video.videoThumbnails.medium.url} alt="THUMBNAIL"/>
          </div>
        )
      })
    }
    return thumbnails
  }


  render () {
    let thumbnails = this.getThumbnails()
    return (
      <div className="videoStripContainer">
        <h1 className="videoCategoryHeader">
          { this.props.category.categoryTitle }
        </h1>
        <div className="videoThumbnailContainer">
          { thumbnails }
        </div>
      </div>
    )
  }
}

export default VideoStrip
