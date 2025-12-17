import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavMenu = () => {
  return (
    <div>
        <ul>
            <NavLink to='/recommended'>Home</NavLink>
            <NavLink to='/library'>My library</NavLink>
        </ul>
    </div>
  )
}
