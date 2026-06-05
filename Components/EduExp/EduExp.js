"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { educationData, experienceData } from "../data/timelineData";

gsap.registerPlugin(ScrollTrigger);

// ── single timeline item ──────────────────────────────────────
const TimelineItem = ({ item, index, type }) => {
    const isLeft = index % 2 === 0;
    const label = type === "education" ? item.institution : item.company;

    return (
        <div className={`timeline-item relative flex items-center w-full mb-12 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>

            {/* Content Box */}
            <div className={`w-[45%] ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}>
                <span className="inline-block text-xs font-bold text-orange-500 bg-orange-50 border border-orange-200 rounded-full px-3 py-1 mb-2">
                    {item.year}
                </span>
                <h3 className="text-base font-bold text-zinc-800">{item.title}</h3>
                <p className="text-sm font-semibold text-orange-400">{label}</p>
                <p className="text-sm text-zinc-500 mt-1 leading-relaxed">{item.description}</p>
            </div>

            {/* Center dot */}
            <div className="absolute left-1/2 -translate-x-1/2 z-10 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-md shadow-orange-300" />

            {/* Empty opposite side */}
            <div className="w-[45%]" />
        </div>
    );
};

// ── section ───────────────────────────────────────────────────
const EduExp = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        // const ctx = gsap.context(() => {

        //     // ghost title
        //     gsap.to("#eduexp-title", {
        //         y: -100,
        //         opacity: 1,
        //         scrollTrigger: {
        //             trigger: "#eduexp-title",
        //             scroller: "body",
        //             start: "top 90%",
        //             end: "top 0",
        //             scrub: 2,
        //         },
        //     });

        //     // timeline line draw
        //     gsap.from("#timeline-line", {
        //         scaleY: 0,
        //         transformOrigin: "top center",
        //         ease: "none",
        //         scrollTrigger: {
        //             trigger: "#timeline-line",
        //             scroller: "body",
        //             start: "top 70%",
        //             end: "bottom 20%",
        //             scrub: 1,
        //         },
        //     });

        //     // cards alternate slide-in
        //     gsap.utils.toArray(".timeline-item").forEach((item, i) => {
        //         const isLeft = i % 2 === 0;
        //         gsap.from(item, {
        //             x: isLeft ? -60 : 60,
        //             opacity: 0,
        //             duration: 0.6,
        //             ease: "power2.out",
        //             scrollTrigger: {
        //                 trigger: item,
        //                 scroller: "body",
        //                 start: "top 85%",
        //                 toggleActions: "play none none none",
        //             },
        //         });
        //     });

        // }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full relative py-16 px-6">

            {/* Ghost background title */}
            <p
                id="eduexp-title"
                className="absolute opacity-0 -left-[5%] top-[10%] text-[10rem] uppercase text-transparent mix-blend-difference pointer-events-none select-none"
                style={{ WebkitTextStroke: "1px #e2e2e2" }}
            >
                Journey
            </p>

            {/* Brush bg assets — reuse yours */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <img src="/_mini-Img/brush-1.png" alt="" className="absolute right-10 scale-[2] -rotate-[95deg] top-[10%] opacity-30" />
                <img src="/_mini-Img/brush-7.png" alt="" className="absolute -left-[6rem] bottom-0 scale-75 opacity-30" />
            </div>

            {/* ── EXPERIENCE ── */}
            <h1 className="heading-1 uppercase text-[--primaryTxt] font-bold text-4xl text-center mt-20 mb-4">
                Experience
            </h1>
            <p className="text-center text-zinc-500 text-base mb-14">
                Work and internship history.
            </p>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical line */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-400 via-orange-300 to-transparent"
                />
                {experienceData.map((item, i) => (
                    <TimelineItem key={item.id} item={item} index={i} type="experience" />
                ))}
            </div>
            
            {/* ── EDUCATION ── */}
            <h1 className="heading-1 uppercase text-[--primaryTxt] font-bold text-4xl text-center mb-4">
                Education
            </h1>
            <p className="text-center text-zinc-500 text-base mb-14">
                Academic background and qualifications.
            </p>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical line */}
                <div
                    id="timeline-line"
                    className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-400 via-orange-300 to-transparent"
                />
                {educationData.map((item, i) => (
                    <TimelineItem key={item.id} item={item} index={i} type="education" />
                ))}
            </div>


        </section>
    );
};

export default EduExp;