import React from 'react'

import keys from '../secret.js'
import '../styles/Home.scss'
import UpfrontVideo from './UpfrontVideo'
import VideoStrip from './VideoStrip'
import VideoWrapper from './VideoWrapper'
import Footer from './Footer'

class Home extends React.Component {
  constructor () {
    super ()
    this.state = {
      apiURL: 'https://www.googleapis.com/youtube/v3/videoCategories',
      apiKey: keys.youtube,
      categoriesList: {
        categoriesListEtag: '',
        channels: []
      },
      upfrontVideo: {}
    }
    this.setUpVideoStrips = this.setUpVideoStrips.bind(this)
  }

  componentDidMount () {
    fetch(`${this.state.apiURL}?key=${this.state.apiKey}&part=snippet&regionCode=in`)
      .then(response => response.json())
      .then(categoriesDetail => {
        let categoriesList = {
          categoriesListEtag: '',
          channels: [{
            categoryId: '0',
            categoryTitle: "Most Popular"
          }]
        }
        categoriesList.categoriesListEtag = categoriesDetail.etag

        // if (categoriesDetail.items.length !== 0)
        for(let item of categoriesDetail.items) {
          if (item.snippet.assignable) {
            categoriesList.channels.push({
              etag: item.etag,
              categoryId: item.id,
              channelId: item.snippet.channelId,
              categoryTitle: item.snippet.title
            })
          }
        }

        this.setState({
          categoriesList
        })
      })
      .catch(console.log)
  }

  getUpfrontVideo = (upfrontVideo) => {
    console.log('In props function')
    console.log(upfrontVideo, '44444444')
    this.setState({
      upfrontVideo
    })
  }

  setUpVideoStrips () {
    let videoStrips = []
    if (this.state.categoriesList.channels.length !== 0) {
      videoStrips = this.state.categoriesList.channels.map((item, index) => {
          // if (index < 1) // Control the number of video strips
          // console.log(item)
            return <VideoWrapper apiKey={this.state.apiKey} item={item} key={index} getUpfrontVideo={this.getUpfrontVideo}/>
          // return <VideoStrip apiKey={this.state.apiKey} category={item} key={index} getUpfrontVideo={this.getUpfrontVideo}/>
      })
    }
    return videoStrips
  }

  render () {
    let videoStrips = this.setUpVideoStrips()
    // console.log(this.state.categoriesList);
    // console.log('Hello');

    return (
      <div className="homePage">
        {
          Object.keys(this.state.upfrontVideo).length > 0 ?
          <UpfrontVideo upfrontVideo={this.state.upfrontVideo}/> : ''
        }

          <div className="videoStripsHolder">
          {
            (videoStrips !== undefined) ? videoStrips : ''
          }
          <Footer/>
        </div>
      </div>
    )
  }
}

export default Home
