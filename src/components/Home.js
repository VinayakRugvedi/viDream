import React from 'react'

import keys from '../secret.js'
import VideoStrip from './VideoStrip'

class Home extends React.Component {
  constructor () {
    super ()
    this.state = {
      apiURL: 'https://www.googleapis.com/youtube/v3/videoCategories',
      apiKey: keys.youtube,
      categoriesList: {
        categoriesListEtag: '',
        channels: []
      }
    }
    this.setUpVideoStrips = this.setUpVideoStrips.bind(this)
  }

  componentDidMount () {
    fetch(`${this.state.apiURL}?key=${this.state.apiKey}&part=snippet&regionCode=in`)
      .then(response => response.json())
      .then(categoriesDetail => {
        let categoriesList = {
          categoriesListEtag: '',
          channels: []
        }
        categoriesList.categoriesListEtag = categoriesDetail.etag
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

  setUpVideoStrips () {
    let videoStrips
    if (this.state.categoriesList.channels.length !== 0) {
      videoStrips = this.state.categoriesList.channels.map((item, index) => {
          if (index < 3)
          return <VideoStrip apiKey={this.state.apiKey} category={item} key={index}/>
      })
    }
    return videoStrips
  }

  render () {
    let videoStrips = this.setUpVideoStrips()

    return (
      <div className="homePage">
        {
            (videoStrips !== undefined) ? videoStrips : ''
        }
      </div>
    )
  }
}

export default Home
