'use strict'

import React, { Component } from 'react'
import Button from './button'

// AULA - children CHILDREN


class App extends Component {
  render(){
    return (
      <div className="container">
        <Button>
          Test mtz
          <span> Texto no span</span>

        </Button>
      </div>
    )
  }
}

export default App