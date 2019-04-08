import React from 'react'

import '../styles/VideoStrip.scss'
import slideRightArrow from '../assets/slideRightArrow.svg'

import Thumbnail from './Thumbnail'

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
    fetch(`${this.state.apiURL}?key=${this.props.apiKey}&part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=7&videoCategoryId=${this.props.category.categoryId}`)
    .then(response => response.json())
    .then(categoryVideosDetail => {
      // console.log(categoryVideosDetail)
      let categoryVideosList = {
        categoryVideosListEtag: categoryVideosDetail.etag,
        videos: []
      }
      // console.log(categoryVideosDetail);
      for (let item of categoryVideosDetail.items) {
        categoryVideosList.videos.push({
          etag: item.etag,
          videoId: item.id,
          channelId: item.snippet.channelId,
          videoTitle: item.snippet.title,
          videoDescription: item.snippet.description,
          videoThumbnails: item.snippet.thumbnails,
          videoDuration: item.contentDetails.duration,
          videoLikes: item.statistics.likeCount,
          videoDislikes: item.statistics.dislikeCount,
          videoViews: item.statistics.viewCount
        })
      }

      //Choosing category Id to be 1 since its film and animation
      console.log(this.props.category.categoryId, 'catttttttttt')
      if (this.props.category.categoryId === '1') {
        console.log('The most Popular ones')
        let randomVideoIndex = Math.floor(Math.random() * Math.floor(categoryVideosList.videos.length))
        // console.log(randomVideo)
        this.props.getUpfrontVideo(categoryVideosList.videos[randomVideoIndex])
      }

      this.setState({
        categoryVideosList
      })
    })
    .catch(console.log)
  }

  getThumbnails () {
    // console.log(this.state.categoryVideosList.videos)
    let thumbnails
    if (this.state.categoryVideosList.videos.length !== 0) {
      thumbnails = this.state.categoryVideosList.videos.map((video, index) => {
        if (index < 7) { // Control the number of thumbnails in a video stripts
          return (
            <Thumbnail video={video} key={index} showVideoDetail={this.props.showVideoDetail}
            toShowVideoDetail={this.props.toShowVideoDetail} videoInConcernId={this.props.videoInConcernId}/>
          )
        }
      })
    }
    return thumbnails
  }

  render () {
    let thumbnails = this.getThumbnails()
    if (this.state.categoryVideosList.videos.length === 0) return null
    return (
      <div className="videoStripContainer">
        <h1 className="videoCategoryHeader">
          { this.props.category.categoryTitle }
        </h1>
        <div className="videoThumbnailContainer">
          { thumbnails }
          <div className="slideRight">
            <img src={slideRightArrow} alt="->" className="slideDownArrowIcon"/>
          </div>
        </div>
      </div>
    )
  }
}

export default VideoStrip
