import React from 'react'
import { NavLink } from 'react-router-dom'
import { StlNavContainer } from './NavMenu.styled'

export const NavMenu = () => {
  return (
    <>
        <StlNavContainer>
            <NavLink to='/recommended'>Home</NavLink>
            <NavLink to='/library'>My library</NavLink>
        </StlNavContainer>
    </>
  )
}
