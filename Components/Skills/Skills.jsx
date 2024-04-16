"use client";
import React, { useEffect } from 'react'
import Skill_Dynamic from './Skill_Dynamic';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skills = () => {

  useEffect(() => {
    gsap.to("#skill-title", {
      y: -100,
      opacity: 1,
      duration: 0.4,
      yoyo: true,
      scrollTrigger: {
        trigger: "#skill-title",
        scroller: "body",
        start: "top 90%",
        end: "top 0",
        scrub: 2,
      }
    })
  }, [])

  return (
    <section className='h-[100vh] w-full relative' >
      <p id='skill-title' className='absolute opacity-0 -left-[5%] top-[52%] -translate-y-1/2 text-[10rem] uppercase text-transparent mix-blend-difference opacity-50' >Skills</p>
      <div id="bg-img-asstes" className='absolute top-0 left-0 w-full h-full'>
        <img src="/_mini-Img/brush-1.png" alt="" className='absolute right-10 scale-[2] -rotate-[95deg] top-[15%]' />
        <img src="/_mini-Img/brush-7.png" alt="" className='absolute -left-[6rem] -bottom-[3.5rem] scale-75' />

      </div>

      <h1 className='heading-1 uppercase text-[--primaryTxt] font-bold text-4xl text-center pt-6' >Skills</h1>
      <p className='mt-4 mb-10 text-xl text-center '>All technical skills and their corresponding coding notes. </p>

      <div id="skill-in" className='bg-green-100 h-[80%] pl-12 pr-6 py-8 shadow-orange-500  shadow-lg '>

        {/* --------------------------------- */}
        <Skill_Dynamic />
        {/* --------------------------------- */}

      </div>
    </section>
  )
}

export default Skills