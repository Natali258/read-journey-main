import React from 'react'

import { NavMenu } from '../NavMenu/NavMenu'
import { Logo } from '../Logo/Logo'
import { UserBar } from '../UserBar/UserBar'

export const Header = () => {
  return (
    <div>
      <Logo/>
      <NavMenu/>
      <UserBar/>
      <button>Log out</button>
    </div>

  )
}
