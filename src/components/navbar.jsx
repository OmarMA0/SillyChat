import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className='bg-[#463f3a]  font-display italic text-[#463f3a] m-1  p-2 '>
  <ul className = 'm-auto  m-2  flex  justify-center ' >
    <li className = 'mx-8 bg-[#f4f3ee] font-display border-[#bcb8b1]  hover:text-[#e0afa0] rounded-md  border-2 p-2 '><Link to="/">Home</Link></li>
    <li className = 'mx-8 bg-[#f4f3ee] border-[#bcb8b1] hover:text-[#e0afa0] rounded-md border-2 p-2'><Link to="/about">About</Link></li>
    <li className = 'mx-8 bg-[#f4f3ee] border-[#bcb8b1] hover:text-[#e0afa0] rounded-md border-2 p-2'><Link to="/signin">Sign In</Link></li>
    <li className = 'mx-8  bg-[#f4f3ee]  border-[#bcb8b1] hover:text-[#e0afa0] rounded-md  border-2  p-2'><Link to="/contact">Contact</Link></li>
  </ul>
</nav>
        </>
  )
}

export default Navbar