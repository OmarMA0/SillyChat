import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className=' bg-[#bcb8b1]'>
        <h1 className='text-7xl bg-[#463f3a] m-2 inline-flex justify start font-display italic
        rounded-md border-2 p-3 border-[#bcb8b1] text-[#f4f3ee]'>Silly Chat</h1>
        <form className='flex flex-col justify-center items-center min-h-screen'>
          <label className='justify-start mb-2'>Email</label>
          <input className='rounded-lg border bg-[#463f3a] border-[#bcb8b1] text-[#f4f3ee] p-2.5 mb-4 ' ></input>
          <label className='mb-2'>Password</label>
          <input className='rounded-lg border bg-[#463f3a] border-[#bcb8b1] text-[#f4f3ee] p-2.5 mb-2 ' ></input>
          <button className='text-2xl bg-[#463f3a] m-2 hover:text-[#e0afa0] font-display italic
        rounded-md border-2 p-3 border-[#bcb8b1] text-[#f4f3ee]'>Sign in</button>
        <p className="text-center mt-4">Don't have an account yet?{' '}
            <Link to="/register" className="text-[#f4f3ee] hover:text-[#e0afa0] underline">
                 Sign up here
             </Link>
</p>
        </form></div>

  )}
export default Home