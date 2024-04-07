import React from 'react'

const Navbar = () => {

  return (
    <nav className='flex justify-between px-[11rem] h-[10vh] w-full absolute flex items-center' >
      <div id="logo" className='font-semibold text-black text-xl' >Logo</div>
      <div id='nav-in' className='flex items-center gap-10 ' >
        <li className='my-btn' >Home</li>
        <li className='my-btn' >About</li>
        <li className='my-btn' >Blogs</li>
        <li className='my-btn' >Contact</li>

        <div className='my-btn py-2 px-6 w-[11rem] h-[2.75rem] border-[--primaryTxt] rounded-full border-[2px] duration-150 overflow-hidden relative flex justify-center items-center'>
          <div id="my-btnBG" className='bg-[--primaryTxt] absolute h-0 w-full bottom-0 left-0 transition-all duration-500'></div>
          <p id='my-btnTxt' className='absolute transition-all duration-100' >Download CV</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar