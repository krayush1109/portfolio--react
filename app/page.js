import Home from '@/Components/Home/Home'
import Skills from '@/Components/Skills/Skills'
import Navbar from '@/Components/Navbar/Navbar'
import React from 'react'
import Projects from '@/Components/Projects/Projects'
import EduExp from '@/Components/EduExp/EduExp' 

const page = () => {

  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <EduExp />
    </>
  )
}

export default page