"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import siteConfig from "../data/siteConfig";

gsap.registerPlugin(ScrollTrigger);

const { social } = siteConfig;

const profiles = [
    {
        id: 1,
        name: "GitHub",
        profileUrl: `https://github.com/${social.github}`,
        color: "#24292e",
        statsImg: `https://github-readme-streak-stats.herokuapp.com?user=${social.github}&hide_border=true&theme=default`,
        statsImg2: `https://github-readme-stats.vercel.app/api?username=${social.github}&show_icons=true&hide_border=true&theme=default&hide_title=true&count_private=true`,

    },
    {
        id: 2,
        name: "LeetCode",
        profileUrl: `https://leetcode.com/${social.leetcode}`,
        color: "#f89f1b",
        statsImg: `https://leetcard.jacoblin.cool/${social.leetcode}?theme=light&font=Nunito&ext=heatmap&border=0`,
    },
    {
        id: 3,
        name: "GeeksForGeeks",
        profileUrl: `https://www.geeksforgeeks.org/user/${social.gfg}`,
        color: "#2f8d46",
        statsImg: `https://geeks-for-geeks-stats-api-and-github-profile-summary-cards.vercel.app/api/gfg-stats?userName=${social.gfg}`,
    },
];

const CodingProfiles = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        // const ctx = gsap.context(() => {
        //     gsap.from(".profile-card", {
        //         y: 40,
        //         opacity: 0,
        //         duration: 0.6,
        //         stagger: 0.15,
        //         ease: "power2.out",
        //         scrollTrigger: {
        //             trigger: ".profile-card",
        //             scroller: "body",
        //             start: "top 85%",
        //             toggleActions: "play none none none",
        //         },
        //     });
        // }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="h-[100vh] w-full relative py-10 px-6 overflow-hidden">

            {/* Brush assets */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <img src="/_mini-Img/brush-1.png" alt="" className="absolute right-10 scale-[2] -rotate-[95deg] top-[15%] opacity-30" />
                <img src="/_mini-Img/brush-7.png" alt="" className="absolute -left-[6rem] -bottom-[3.5rem] scale-75 opacity-30" />
            </div>

            {/* Heading */}
            <h1 className="heading-1 uppercase text-[--primaryTxt] font-bold text-4xl text-center mb-2">
                Coding Profiles
            </h1>
            <p className="text-center text-zinc-500 text-base mb-10">
                Consistency across platforms.
            </p>

            {/* 3 col grid */}
            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-3 gap-6">
                {profiles.map((profile) => (
                    <div
                        key={profile.id}
                        className="profile-card bg-white rounded-2xl shadow-md border border-zinc-100 overflow-hidden flex flex-col items-center p-4 gap-4"
                    >
                        {/* Stats image */}
                        <img
                            src={profile.statsImg}
                            alt={`${profile.name} stats`}
                            className="w-full rounded-xl"
                            loading="lazy"
                        />

                        {/* Visit button */}
                    <a
                        href={profile.profileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full text-center text-sm font-semibold py-2 rounded-full border-2 transition-all duration-200 hover:opacity-70"
                        style={{ borderColor: profile.color, color: profile.color }}
            > 
                        {profile.name} →
                    </a>
          </div>
        ))}
        </div>

    </section >
  );
};

export default CodingProfiles;