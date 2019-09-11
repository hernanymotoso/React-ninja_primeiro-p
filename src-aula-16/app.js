'use strict'

import React, { Component } from 'react'

import Timer from './timer'

// AULA - STATEFUL VS STATELESS


class App extends Component {
  constructor () {
    console.log('constructor app')
    //statefull
    super()
    this.state = {
      timer: 0,
      showTimer: true
    }
  }

  componentWillMount() {
    console.log('componentWillMount app')
  }

  componentDidMount() {
    console.log('componentDidMount app')
  }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount')
  // }

  render(){
    console.log('render app')
    return (
      <div>
        <Timer timer={this.state.timer} />
        <button onClick={() => {
          this.setState({ timer: this.state.timer + 10 })
        }}>Change Props</button>
      </div>
    )
  }
}

export default App