"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contactLinks } from "../data/contactMeData";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );
            setSent(true);
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setSent(false), 4000);
        } catch (error) {
            console.error("EmailJS error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    useEffect(() => {
        // const ctx = gsap.context(() => {

        //     // Ghost title
        //     gsap.to("#contact-title", {
        //         y: -100,
        //         opacity: 1,
        //         scrollTrigger: {
        //             trigger: "#contact-title",
        //             scroller: "body",
        //             start: "top 90%",
        //             end: "top 0",
        //             scrub: 2,
        //         },
        //     });

        //     // Left links slide in
        //     gsap.from(".contact-link-card", {
        //         x: -50,
        //         opacity: 0,
        //         duration: 0.5,
        //         stagger: 0.1,
        //         ease: "power2.out",
        //         scrollTrigger: {
        //             trigger: ".contact-link-card",
        //             scroller: "body",
        //             start: "top 85%",
        //             toggleActions: "play none none none",
        //         },
        //     });

        //     // Right form slide in
        //     gsap.from("#contact-form", {
        //         x: 60,
        //         opacity: 0,
        //         duration: 0.7,
        //         ease: "power2.out",
        //         scrollTrigger: {
        //             trigger: "#contact-form",
        //             scroller: "body",
        //             start: "top 85%",
        //             toggleActions: "play none none none",
        //         },
        //     });

        // }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full min-h-screen relative py-16 px-6 overflow-hidden">

            {/* Ghost title */}
            <p
                id="contact-title"
                className="absolute opacity-0 -left-[5%] top-[10%] text-[10rem] uppercase text-transparent pointer-events-none select-none mix-blend-difference"
                style={{ WebkitTextStroke: "1px #e2e2e2" }}
            >
                Connect
            </p>

            {/* Brush assets */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <img src="/_mini-Img/brush-1.png" alt="" className="absolute right-10 scale-[2] -rotate-[95deg] top-[15%] opacity-30" />
                <img src="/_mini-Img/brush-7.png" alt="" className="absolute -left-[6rem] -bottom-[3.5rem] scale-75 opacity-30" />
            </div>

            {/* Section heading */}
            <h1 className="heading-1 uppercase text-[--primaryTxt] font-bold text-4xl text-center mb-2">
                Let's Connect
            </h1>
            <p className="text-center text-zinc-500 text-base mb-16">
                Open for freelance, collaborations, or just a good conversation.
            </p>

            {/* Main layout */}
            <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start">

                {/* ── LEFT — Links ── */}
                <div className="flex flex-col gap-5 w-full md:w-[45%]">
                    <h2 className="text-2xl font-bold text-zinc-800 mb-2">Find me on</h2>

                    {contactLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={link.id}
                                href={link.href}
                                target={link.download ? "_self" : "_blank"}
                                rel="noreferrer"
                                download={link.download}
                                className="contact-link-card flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm shadow-zinc-300 border border-zinc-100 hover:border-orange-400 hover:shadow-orange-200 hover:shadow-md transition-all duration-300 group"
                            >
                                {/* Icon box */}
                                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                                    <Icon size={20} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
                                </div>

                                {/* Text */}
                                <div>
                                    <p className="text-xs text-zinc-400 font-medium uppercase tracking-wide">{link.label}</p>
                                    <p className="text-sm font-semibold text-zinc-700 group-hover:text-orange-500 transition-colors duration-200">
                                        {link.value}
                                    </p>
                                </div>
                            </a>
                        );
                    })}
                </div>

                {/* ── RIGHT — Form ── */}
                <form
                    id="contact-form"
                    onSubmit={handleSubmit}
                    className="w-full md:w-[55%] bg-white rounded-3xl shadow-md shadow-zinc-300 border border-zinc-100 p-8 flex flex-col gap-5"
                >
                    <h2 className="text-2xl font-bold text-zinc-800">Send a message</h2>

                    {/* Name */}
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ayush Kumar"
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-700 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="ayush@email.com"
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-700 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                        />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">Message</label>
                        <textarea
                            name="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Hey Ayush, I'd like to work with you on..."
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-700 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-200 resize-none"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-orange-500 text-white font-semibold text-sm tracking-wide hover:bg-orange-600 active:scale-95 transition-all duration-200"
                    >
                        {sent ? "Message Sent ✓" : "Send Message →"}
                    </button>

                    {sent && (
                        <p className="text-center text-sm text-green-500 font-medium">
                            Thanks! I'll get back to you soon.
                        </p>
                    )}
                </form>

            </div >
        </section >
    );
};

export default Contact;