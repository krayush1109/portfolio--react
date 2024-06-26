import React from 'react'

const Navbar = () => {

  return (
    <nav className='flex justify-between  h-[7vh] w-full fixed items-center z-50 bg-[#ffffff7c] backdrop-blur-sm shadow-[#ffb5836c] shadow-lg' >
      <div id="logo" className='text-xl font-semibold text-black' >Logo</div>
      <div id='nav-in' className='flex items-center gap-10 ' >
        <li className='my-btn active:scale-90' >Home</li>
        <li className='my-btn active:scale-90' >About</li>
        <li className='my-btn active:scale-90' >Blogs</li>
        <li className='my-btn active:scale-90' >Contact</li>

        <div className='my-btn py-2 px-6 w-[11rem] h-[2.75rem] border-[--primaryTxt] rounded-full border-[2px] duration-150 overflow-hidden relative flex justify-center items-center'>
          <div id="my-btnBG" className='bg-[--primaryTxt] absolute h-0 w-full bottom-0 left-0 transition-all duration-500'></div>
          <p id='my-btnTxt' className='absolute transition-all duration-200' >Download CV</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar