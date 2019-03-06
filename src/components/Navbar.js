import React, {Component} from 'react'

import '../styles/Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <a href="#a" id="logo">viDream</a>
        <a href="#b">Home</a>
        <a href="#c">Series</a>
        <a href="#d">Films</a>
        <a href="#e">Recently added</a>
        <a href="#f">My List</a>
      </nav>
    )
  }
}

export default Navbar
