'use strict'

import React, { Component } from 'react'

import Timer from './timer'

// AULA - STATEFUL VS STATELESS


class App extends Component {
  constructor () {
    console.log('constructor')
    //statefull
    super()
    this.state = {
      showTimer: true
    }
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount')
  // }

  render(){
    console.log('render')
    return (
      <div>
        {this.state.showTimer && <Timer />}
        <button onClick={() => {
          this.setState({ showTimer: !this.state.showTimer })
        }}>Show / hide timer</button>
      </div>
    )
  }
}

export default App