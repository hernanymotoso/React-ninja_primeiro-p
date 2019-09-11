'use strict'

import React, { Component } from 'react'

// AULA - FORMS

class App extends Component { 
  constructor () {
    super()
    this.state = {
      value: 'Valor inicial'  
    }
  }
  render(){
    return (
      <div>
        <form>
          <input type="text" value={this.state.value}onChange={(e) => {
            console.log(e.target)
            this.setState({
              value: e.target.value
            })
          }} />
        </form>
      </div>
    )
  }
}

export default App