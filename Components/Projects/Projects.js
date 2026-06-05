"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { projectsData } from "@/data/projectsData";
import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);   // the horizontal scroll container

  useEffect(() => {
    // const ctx = gsap.context(() => {

    //   // Title animation — same as your skill-title
    //   gsap.to("#project-title", {
    //     y: -100,
    //     opacity: 1,
    //     duration: 0.4,
    //     scrollTrigger: {
    //       trigger: "#project-title",
    //       scroller: "body",
    //       start: "top 90%",
    //       end: "top 0",
    //       scrub: 2,
    //     },
    //   });

    //   // Cards stagger fade-in
    //   gsap.from(".project-card", {
    //     y: 40,
    //     opacity: 0,
    //     duration: 0.6,
    //     stagger: 0.12,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //       trigger: scrollRef.current,
    //       scroller: "body",
    //       start: "top 80%",
    //       toggleActions: "play none none none",
    //     },
    //   });

    // }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-[100vh] w-full relative">

      {/* Big ghost title — same as Skills section */}
      <p
        id="project-title"
        className="absolute opacity-0 -left-[5%] top-[52%] -translate-y-1/2 text-[10rem] uppercase text-transparent mix-blend-difference opacity-50"
      >
        Projects
      </p>

      {/* Background brush images — reuse your existing ones or swap */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <img src="/_mini-Img/brush-1.png" alt="" className="absolute right-10 scale-[2] -rotate-[95deg] top-[15%] opacity-40" />
        <img src="/_mini-Img/brush-7.png" alt="" className="absolute -left-[6rem] -bottom-[3.5rem] scale-75 opacity-40" />
      </div>

      {/* Heading */}
      <h1 className="heading-1 uppercase text-[--primaryTxt] font-bold text-4xl text-center pt-6">
        Projects
      </h1>
      <p className="mt-4 mb-10 text-xl text-center">
        Here are some highlights showcasing my skills and creativity.
      </p>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-12 py-6 scroll-smooth scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-transparent"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {projectsData.map((project) => (
          <div key={project.id} style={{ scrollSnapAlign: "start" }}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;