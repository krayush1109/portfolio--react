"use client";
import React, { useEffect, useState } from 'react'

import SkillsJson from '@/public/SkillsJson.json'

const Skill_Dynamic = () => {
    return (
        <>
            {
                SkillsJson.map((elem, ind) => {
                    return (
                        <div key={ind} className="skill-Category flex border-black border-2">
                            <h1 className='inline text-4xl font-bold' >{elem.category}</h1>

                            {
                                elem.techStack.map((e, i) => {
                                    return (

                                        <div key={i} className="skill-card inline-block mx-8 border-2 border-none bg-gray-200 rounded-2xl p-4 relative pt-16 w-48">
                                            <div id="SkillImgBox" className='border-2 border-none absolute  top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] w-24 h-24 p-4 rounded-full ' >
                                                <img src={`/skill-img/${e.iconPath}`} alt="NA" className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-4/5 ' />
                                            </div>
                                            <h2 className='font-bold text-xl text-center'>
                                                {e.name}
                                            </h2>
                                        </div>
                                    )
                                })}
                        </div>
                    )
                })
            }

        </>
    )
}

export default Skill_Dynamic