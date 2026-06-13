import Home from '@/Components/Home/Home'
import Skills from '@/Components/Skills/Skills'
import Navbar from '@/Components/Navbar/Navbar'
import React from 'react'
import Projects from '@/Components/Projects/Projects'
import EduExp from '@/Components/EduExp/EduExp' 
import Contact from '@/Components/ContactMe/Contact'
import CodingProfiles from '@/Components/CodingProfiles/CodingProfiles'
import CTAFooter from '@/Components/CTAFooter/CTAFooter'

const page = () => {

  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <EduExp />
      <Contact />
      <CodingProfiles />
      <CTAFooter />
    </>
  )
}

export default page