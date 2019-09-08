'use strict'

import React, { Component } from 'react'
import Square from './square'

// AULA - PROBLEMAS AO DUPLICAR A "KEY"


class App extends Component {
  render(){
    return (
      <div className="container">
        {['blue', 'red', 'blue'].map((square, index) => (
          <Square key={index} color={square} />    
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