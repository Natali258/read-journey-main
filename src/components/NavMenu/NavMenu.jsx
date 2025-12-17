import React from 'react'
// import { NavLink } from 'react-router-dom'
import { StlNavContainer, StlNavLink } from './NavMenu.styled'

export const NavMenu = () => {
  return (
    <>
        <StlNavContainer>
            <StlNavLink to='/recommended'>Home</StlNavLink>
            <StlNavLink to='/library'>My library</StlNavLink>
        </StlNavContainer>
    </>
  )
}
