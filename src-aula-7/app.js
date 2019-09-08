'use strict'

import React, { Component } from 'react'
import Square from './square'


class App extends Component {
  render(){
    return (
      <div className="container">
        {['blue', 'red', 'green'].map((square) => (
          <Square key={square} color={square} />    
        ))}
       
      </div>
    )
  }
}


// const App = React.createClass({
//   render: function(){
//     return (
//       <div className="container">
//         <Title name="Hernany" />
       
//       </div>
//     )
//   }
// })

export default App