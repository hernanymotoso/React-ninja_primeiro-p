'use strict'

import React, { Component } from 'react'
import Button from './button'

// AULA - PROPTYPES

class App extends Component { 
  render(){
    console.log('render app')
    return (
      <div>
        <Button handleClick={() => console.log('clicou')}>
          Click em mim 
        </Button>
      </div>
    )
  }
}

export default App