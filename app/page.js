import Home from '@/Components/Home/Home'
import Skills from '@/Components/Skills/Skills'
import Navbar from '@/Components/Navbar/Navbar'
import React from 'react'

const page = () => {



  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <div className='h-[100vh] w-full bg-lime-300' ></div>
    </>
  )
}

export default page