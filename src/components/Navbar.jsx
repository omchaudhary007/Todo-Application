import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full px-4 py-2 bg-sky-700 text-white flex justify-around items-center'>
      <h1 className='md:text-2xl font-bold cursor-pointer'>TodoTide</h1>
      <nav className='flex gap-14 items-center font-medium lg:text-base md:text-xs'>
        <a href="#home" className='text-transition'>Home</a>
        <a href="#tasks" className='text-transition'>Your Tasks</a>
      </nav>
    </header>
  )
}

export default Navbar
