"use client";
import React from 'react'
import Skill_Dynamic from './Skill_Dynamic';

const Skills = () => {
  return (
    <div className='h-[100vh] w-full ' >
      <h1 className='heading-1 uppercase text-[--primaryTxt] font-bold text-4xl text-center py-6' >Skills</h1>
      <p className='text-center' >All technical skills and their corresponding coding notes. </p>

      <div id="skill-in" className='border-teal-500 border-2'>

        {/* --------------------------------- */}
        {/* <div className="skill-Category flex border-black border-2">
          <h1 className='inline text-4xl font-bold' >FrontEnd</h1>

          <div className="skill-card inline-block mx-8 border-2 border-none bg-gray-200 rounded-2xl p-4 relative pt-16 w-48">
            <div id="SkillImgBox" className='border-2 border-none absolute  top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] w-24 h-24 p-4 rounded-full ' >
              <img src="/skill-img/react.png" alt="Not Found" className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-4/5 ' />
            </div>
            <h2 className='font-bold text-xl text-center'>HTML5/CSS3</h2>
          </div>

          <div className="skill-card inline-block mx-8 border-2 border-none bg-gray-200 rounded-2xl p-4 relative pt-16 w-48">
            <div id="SkillImgBox" className='border-2 border-none absolute  top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] w-24 h-24 p-4 rounded-full ' >
              <img src="/skill-img/react.png" alt="Not Found" className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-4/5 ' />
            </div>
            <h2 className='font-bold text-xl text-center'>HTML5/CSS3</h2>
          </div>
        </div> */}

        <Skill_Dynamic />
        {/* --------------------------------- */}

      </div>
    </div>
  )
}

export default Skills