'use strict'

import React from 'react'

// o Square é um modelo de stateless, pq ele não altera a propriedade do elemento.

const Square = ({ color }) => (
  <div style={{
    backgroundColor: color,
    height: '100px',
    width: '100px'
  }} />
)

Square.defaultProps = {
  color: 'red'
}



export default Square