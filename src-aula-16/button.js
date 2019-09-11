'use strict'

import React from 'react'

// o Button é um modelo de stateless, pq ele não altera a propriedade do elemento.

const Button = ({ children, handleClick }) => (
  <button className="main-button" onClick={handleClick}>
    {children}
  </button>
)

export default Button