"use client";
import React, { useEffect, useState } from 'react'

import SkillsJson from '@/public/SkillsJson.json'

const Skill_Dynamic = () => {
    return (
        <>
            {
                SkillsJson.map((elem, ind) => {
                    return (
                        <div key={ind} className="skill-Category flex items-center h-[11rem]">
                            <h1 className='text-2xl uppercase font-bold w-1/4 py-8' >{elem.category}</h1>

                            {
                                elem.techStack.map((e, i) => {
                                    return (

                                        <div key={i} className="skill-card inline-block mx-4 border-none  bg-[#fff] backdrop:blur-lg relative pt-10 pb-10 w-48 rounded-2xl cursor-pointer shadow-zinc-400 shadow-md">
                                            <div id="SkillImgBox" className='border-none absolute  top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] w-20 h-20 p-4 ' >
                                                <img src={`/skill-img/${e.iconPath}`} alt="NA" className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-4/5 ' />
                                            </div>
                                            <h2 className='font-semibold text-xl text-center absolute w-full'>
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