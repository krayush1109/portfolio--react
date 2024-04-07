import Home from '@/Components/Home/Home'
import TechStack from '@/Components/Home/TechStack'
import Navbar from '@/Components/Navbar/Navbar'
import React from 'react'

const page = () => {
  
  return (
    <>
      <Navbar />
      <Home />
      <TechStack />
    </>
  )
}

export default page