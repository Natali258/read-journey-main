import styled from "styled-components";
import { NavLink } from 'react-router-dom'

export const StlNavContainer = styled.ul`
display:inline-flex;
margin-left: 334px;
margin-right: 219px;
gap: 40px;
`

export const StlNavLink = styled(NavLink)`
font-family: Gilroy;
font-weight: 500;
font-style: Medium;
font-size: 16px;
line-height: 18px;
letter-spacing: -2%;

`