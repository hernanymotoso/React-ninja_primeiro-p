'use strict'

import React, { Component } from 'react'
import Square from './square'

// AULA - EVENTOS


class App extends Component {
  render(){
    return (
      <div className="container" onClick={(e) => {
        alert('clicou')
      }}>
        <Square />          
      </div>
    )
  }
}

export default App