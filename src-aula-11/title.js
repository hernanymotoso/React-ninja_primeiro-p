'use strict'

import React from 'react';

const Title = (/*props*/ {name, lastname}) => (
  <h1>Olá {`${name} ${lastname}`}</h1>
)

Title.defaultProps = {
  name: 'Desconhecido',
  lastname: 'Sem sobrenome'
}

// const Title = () => {
//   return (
//     <h1>Olá Hernany Dias</h1>
//   )
// }


// const Title = React.createClass({
//   getDefaultProps: function(){
//     return {
//       name: 'Desconhecido',
//       lastname: {
//         first: 'Sem',
//         last: 'Sobrenome'
//       }
//     }
//   },

//   render: function(){
//     return (
//       <h1>Olá {this.props.name + ' ' + this.props.lastname.first + ' ' + this.props.lastname.last}</h1>  
//     );
//   }  
// })

export default Title