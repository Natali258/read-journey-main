import React from 'react'
import { Logo } from '../Logo/Logo'
import { Form } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

export const RegisterForm = () => {
  return (
    <div>
        <Logo/>
        <h1>Expand your mind, reading a book</h1>
        <form>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button type='submit'>Registration</button>
        </form>
        <NavLink to='/login'>Already have an account?</NavLink>
    </div>
  )
}
