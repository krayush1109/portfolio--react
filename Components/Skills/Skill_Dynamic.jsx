"use client";
import React, { useEffect, useState } from 'react'
import SkillsJson from '@/public/SkillsJson.json'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skill_Dynamic = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.to(".skill-card", {
            y: -20,
            duration: 1,
            stagger: 0.1,
            opacity: 1,
            scrollTrigger: {
                trigger: '.skill-card',
                scroller: "body",
                start: "top 80%",
                end: "top 50%",
                scrub: 3,
                // markers: true
            }
        })
        

    }, [])




    return (
        <>
            {
                SkillsJson.map((elem, ind) => {
                    return (
                        <div key={ind} className="skill-Category flex items-center h-[11rem]">
                            <h1 className='text-xl uppercase font-semibold w-[20%] py-8' >{elem.category}</h1>

                            {
                                elem.techStack.map((e, i) => {
                                    return (

                                        <div key={i} className="skill-card opacity-0 inline-block mx-4 border-none  bg-[#fff] backdrop:blur-lg relative pt-10 pb-10 min-w-36 rounded-2xl cursor-pointer shadow-zinc-400 shadow-md">
                                            <div id="SkillImgBox" className='border-none absolute  top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] w-20 h-20 p-4 ' >
                                                <img src={`/skill-img/${e.iconPath}`} alt="NA" className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-4/5 ' />
                                            </div>
                                            <h2 className='font-[500] text-base  text-center absolute w-full'>
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