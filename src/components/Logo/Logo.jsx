import React from 'react'
import { Icon } from '../Icon/Icon'
import { StlLogoContainer, StlLogoText } from './Logo.styled'

export const Logo = () => {
  return (
    <StlLogoContainer>
        <span>
            <Icon name='icon-Logo' size={{width: 42, height: 17}}/>
        </span>
        <StlLogoText>read journey</StlLogoText>
    </StlLogoContainer>
  )
}
