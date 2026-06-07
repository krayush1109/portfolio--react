import Home from '@/Components/Home/Home'
import Skills from '@/Components/Skills/Skills'
import Navbar from '@/Components/Navbar/Navbar'
import React from 'react'
import Projects from '@/Components/Projects/Projects'
import EduExp from '@/Components/EduExp/EduExp' 
import Contact from '@/Components/ContactMe/Contact'

const page = () => {

  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <EduExp />
      <Contact />
    </>
  )
}

export default page