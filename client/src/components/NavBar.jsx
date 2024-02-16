import React from 'react'
import { Outlet } from 'react-router-dom'

function NavBar() {
  return (
    <>
    <header>
    <nav className='p-8'>
      <h1 className='text-center text-4xl font-bold text-red-500'>Vehicle Rentals</h1>
    </nav>
  </header>
  <Outlet></Outlet>
    </>
    
  )
}

export default NavBar