import React from 'react'

import '../styles/VideoStrip.scss'

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
    this.showVideoGlimpse = this.showVideoGlimpse.bind(this)
    this.backToThumbnail = this.backToThumbnail.bind(this)
  }

  componentDidMount () {
    fetch(`${this.state.apiURL}?key=${this.props.apiKey}&part=snippet&chart=mostPopular&maxResults=24&videoCategoryId=${this.props.category.categoryId}`)
    .then(response => response.json())
    .then(categoryVideosDetail => {
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
          toPlay: false
        })
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
        if (index < 1)
        return (
          <div className="videoThumbnail" key={index} id={index} onMouseOver={this.showVideoGlimpse} onMouseOut={this.backToThumbnail}>
            <img src={video.videoThumbnails.medium.url} alt="THUMBNAIL" style={{display: video.toPlay ? 'none' : true}}/>
            <iframe src="https://www.youtube.com/embed/ksWDVurubwE?controls=0&autoplay=true" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="shortClip" style={{display: video.toPlay ? true : 'none'}}></iframe>
          </div>
        )
      })
    }
    return thumbnails
  }

  showVideoGlimpse (event) {
    let categoryVideosListCopy = this.state.categoryVideosList
    console.log(event.target.id);
    categoryVideosListCopy.videos[Number(event.currentTarget.id)].toPlay = true
    setTimeout(() => {
      this.setState({
        categoryVideosList: categoryVideosListCopy
      })
    }, 700)
  }

  backToThumbnail (event) {
    console.log(event.target.id);
    let categoryVideosListCopy = this.state.categoryVideosList
    categoryVideosListCopy.videos[Number(event.currentTarget.id)].toPlay = false
    setTimeout(() => {
      this.setState({
        categoryVideosList: categoryVideosListCopy
      })
    }, 120)
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
