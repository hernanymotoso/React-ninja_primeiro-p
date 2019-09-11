'use strict'
// o Button é um modelo de stateless, pq ele não altera a propriedade do elemento.

import React from 'react'


const Button = ({ children, handleClick }) => (
  <button className="main-button" onClick={handleClick}>
    {children}
  </button>
)

Button.propTypes = {
  handleClick: React.PropTypes.func.isRequired
}
export default Button