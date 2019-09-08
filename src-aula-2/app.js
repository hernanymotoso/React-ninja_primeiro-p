'use strict'

import React from 'react'
import Title from './title'

const App = React.createClass({
  render: function(){
    return (
      <div className="container">
        <Title name='Hernany Dias' />
        <label htmlFor="input">Input teste</label>
        <input type="text" id="input" />
      </div>
    )
  }
})

export default App