"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import siteConfig from "../data/siteConfig";

gsap.registerPlugin(ScrollTrigger);

const CTAFooter = () => {
    const ctaRef = useRef(null);

    useEffect(() => {
        // const ctx = gsap.context(() => {

        //     gsap.from("#cta-content", {
        //         y: 50,
        //         opacity: 0,
        //         duration: 0.8,
        //         ease: "power2.out",
        //         scrollTrigger: {
        //             trigger: "#cta-content",
        //             scroller: "body",
        //             start: "top 80%",
        //             toggleActions: "play none none none",
        //         },
        //     });

        //     gsap.from(".footer-icon", {
        //         y: 20,
        //         opacity: 0,
        //         duration: 0.5,
        //         stagger: 0.1,
        //         ease: "power2.out",
        //         scrollTrigger: {
        //             trigger: ".footer-icon",
        //             scroller: "body",
        //             start: "top 90%",
        //             toggleActions: "play none none none",
        //         },
        //     });

        // }, ctaRef);

        return () => ctx.revert();
    }, []);

    const handleHireMe = () => {
        const section = document.getElementById("contact");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>

            {/* ── CTA BANNER ── */}
            <section className="w-full relative py-24 px-6 overflow-hidden">

                {/* Brush assets */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                    <img src="/_mini-Img/brush-1.png" alt="" className="absolute right-10 scale-[2] -rotate-[95deg] top-[15%] opacity-20" />
                    <img src="/_mini-Img/brush-7.png" alt="" className="absolute -left-[6rem] -bottom-[3.5rem] scale-75 opacity-20" />
                </div>

                {/* CTA Content */}
                <div id="cta-content" className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">

                    {/* Badge */}
                    <span className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-500">
                        ✨ Available for Opportunities
                    </span>

                    {/* Headline */}
                    <h2 className="text-5xl font-bold text-zinc-800 leading-tight">
                        Let's Build Something <br />
                        <span className="text-[--primaryTxt]">Great Together</span>
                    </h2>

                    {/* Subtext */}
                    <p className="text-zinc-500 text-lg">
                        Open for full-time roles & freelance projects · Pune, India 🇮🇳
                    </p>

                    {/* CTA Button */}
                    <button
                        onClick={handleHireMe}
                        className="mt-2 px-10 py-4 bg-orange-500 text-white font-bold text-base rounded-full hover:bg-orange-600 active:scale-95 transition-all duration-200 shadow-lg shadow-orange-200"
                    >
                        Let's Connect →
                    </button>

                </div>
            </section>

            {/* ── FOOTER ── */}
            <footer className="w-full bg-zinc-900 py-10 px-6">
                <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">

                    {/* Name + tagline */}
                    <div className="text-center">
                        <h3 className="text-white text-xl font-bold">{siteConfig.name}</h3>
                        <p className="text-zinc-400 text-sm mt-1">Full Stack Developer</p>
                    </div>

                    {/* Social icons */}
                    <div className="flex items-center gap-6">
<a
                        href={`https://github.com/${siteConfig.social.github}`}
                        target="_blank"
                        rel="noreferrer"
                        className="footer-icon text-zinc-400 hover:text-orange-400 transition-colors duration-200"
            >
                        <FaGithub size={22} />
                    </a>
                    <a
                        href={`https://linkedin.com/in/${siteConfig.social.linkedin}`}
                        target="_blank"
                        rel="noreferrer"
                        className="footer-icon text-zinc-400 hover:text-orange-400 transition-colors duration-200"
                    >
                        <FaLinkedin size={22} />
                    </a>
                    <a
                        href={`https://${siteConfig.social.hashnode}.hashnode.dev`}
                        target="_blank"
                        rel="noreferrer"
                        className="footer-icon text-zinc-400 hover:text-orange-400 transition-colors duration-200"
                    >
                        <FaHashnode size={22} />
                    </a>
                </div>

                {/* Divider */}
                <div className="w-full border-t border-zinc-700" />

                {/* Copyright */}
                <p className="text-zinc-500 text-sm text-center">
                    © {new Date().getFullYear()} {siteConfig.name} · Made with ❤️ in Pune, India
                </p>

        </div >
      </footer >

    </ >
  );
};

export default CTAFooter;