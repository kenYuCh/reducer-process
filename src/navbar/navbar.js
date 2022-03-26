import React,{ useState } from 'react'
import { Link } from 'react-router-dom'

function navbar() {

  return (
    <nav>
        <ul>
            <Link to="/">home</Link>
            <Link to="/shop">shop</Link>
        </ul>
    </nav>
  )
}

export default navbar