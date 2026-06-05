import React from 'react'
import styles from './Nav.module.css';

const Navbar = () => {

  return (
    <nav className={`flex justify-between  h-[7vh] w-full fixed items-center z-50 bg-[#ffffff7c] backdrop-blur-sm shadow-[#ffb5836c] shadow-lg`} >
      <div id="logo" className='text-xl font-semibold text-black' >Logo</div>
      <div className='flex items-center gap-10' >
        <li className={`${styles.navList} my-btn active:scale-90`} >Home</li>
        <li className={`${styles.navList} my-btn active:scale-90`} >About</li>
        <li className={`${styles.navList} my-btn active:scale-90`} >Blogs</li>
        <li className={`${styles.navList} my-btn active:scale-90`} >Contact</li>

        <div className={`${styles.myBtn} py-2 px-6 w-[11rem] h-[2.75rem] border-[--primaryTxt] rounded-full border-[2px] duration-150 overflow-hidden relative flex justify-center items-center`}>
          <div className={`${styles.btnBG} bg-[--primaryTxt] absolute h-0 w-full bottom-0 left-0`}></div>
          <p className={`${styles.btnTxt} absolute`} >Download CV</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar