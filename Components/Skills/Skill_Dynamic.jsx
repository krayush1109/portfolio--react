"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from './Skill.module.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skill_Dynamic = () => {
    const [skillsData, setSkillsData] = useState([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        fetch('/SkillsJson.json')
            .then((response) => response.json())
            .then((data) => setSkillsData(data))
            .catch((error) => {
                console.error('Failed to load skills data:', error);
                setSkillsData([]);
            });
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const groups = gsap.utils.toArray("." + styles.chipGroup);
            groups.forEach((group) => {
                if (!group) return;

                const chips = Array.from(
                    group.querySelectorAll("." + styles.skillChip)
                ).filter(Boolean);

                if (!chips.length) return;

            //     gsap.from(chips, {
            //         y: 24,
            //         opacity: 0,
            //         duration: 0.5,
            //         stagger: 0.07,
            //         ease: "power2.out",
            //         scrollTrigger: {
            //             trigger: group,
            //             start: "top 85%",
            //             toggleActions: "play none none none",
            //         },
            //     });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [skillsData]);

    return (
        <div ref={sectionRef} className={`flex flex-col gap-10 ${styles.chipContainer}`}>
            {skillsData.length === 0 ? (
                <div className="text-center text-sm text-zinc-500">Loading skills...</div>
            ) : (
                skillsData.map((category, catIdx) => (
                    <div key={catIdx} className={`${styles.chipGroup} flex flex-col gap-3 ${styles.skillCard}`}>
                        {/* Category label */}
                        <h2 className="text-md uppercase tracking-widest text-zinc-400 font-semibold">
                            {category.category}
                        </h2>

                        {/* Divider */}
                        <hr className="border-zinc-200" />

                        {/* Chips */}
                        {/* <div className="flex flex-wrap gap-3 pt-1"> */}
                        <div className="flex flex-wrap gap-3 pt-1">
                            {category.techStack.map((skill, skillIdx) => {
                                const hasLink = !!skill.notesUrl;
                                const Wrapper = hasLink ? "a" : "div";
                                const linkProps = hasLink
                                    ? { href: skill.notesUrl, target: "_blank", rel: "noreferrer" }
                                    : {};

                                return (
                                    <Wrapper
                                        key={skillIdx}
                                        {...linkProps}
                                        className={`${styles.skillChip} flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-zinc-200 text-sm font-medium text-zinc-700 transition-all duration-200 ${hasLink ? "cursor-pointer hover:shadow-md hover:border-orange-400 hover:text-orange-500" : "cursor-default"}`}
                                    >
                                        <img
                                            src={`/skill-img/${skill.iconPath}`}
                                            alt={skill.name}
                                            className="w-5 h-5 object-contain"
                                        />
                                        {skill.name}
                                    </Wrapper>
                                );
                            })}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Skill_Dynamic;