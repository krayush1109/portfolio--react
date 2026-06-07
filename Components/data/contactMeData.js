import { FaGithub, FaLinkedin, FaEnvelope, FaHashnode } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";

export const contactLinks = [
    {
        id: 1,
        label: "GitHub",
        value: "github.com/ayushkumar",
        href: "https://github.com/ayushkumar",
        icon: FaGithub,
        download: false,
    },
    {
        id: 2,
        label: "LinkedIn",
        value: "linkedin.com/in/ayushkumar",
        href: "https://linkedin.com/in/ayushkumar",
        icon: FaLinkedin,
        download: false,
    },
    {
        id: 3,
        label: "Email",
        value: "ayush@email.com",
        href: "mailto:ayush@email.com",
        icon: FaEnvelope,
        download: false,
    },
    {
        id: 4,
        label: "Resume",
        value: "Download CV",
        href: "/AyushKumar_Resume.pdf",   // keep PDF in /public
        icon: FiDownload,
        download: true,
    },
    {
        id: 5,
        label: "Blog",
        value: "hashnode.com/@ayushkumar",
        href: "https://ayushkumar.hashnode.dev",
        icon: FaHashnode,
        download: false,
    },
];