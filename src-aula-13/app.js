'use strict'

import React, { Component } from 'react'
import LikeButton from './like-button'
import SearchButton from './search-button'

// AULA - Arrow functions - ARROW FUNCTIONS 


class App extends Component {
  constructor () {
    super()
    this.state = {
      text: 'Hernany'
    }
  }

  render(){
    return (
      <div className="container" onClick={() => this.setState({
        text: 'Outro texto'
      })}>
        {this.state.text} 
      </div>
    )
  }
}

export default App