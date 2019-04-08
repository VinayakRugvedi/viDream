import React, {Component} from 'react'

import '../styles/Navbar.scss'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <a href="#a" id="logo" className="link"><span className="viDream">viDream</span></a>
        <a href="#b" className="link">Home</a>
        <a href="#c" className="link">Series</a>
        <a href="#d" className="link">Films</a>
        <a href="#e" className="link">Recently added</a>
        <a href="#f" className="link">My List</a>
      </nav>
    )
  }
}

export default Navbar
