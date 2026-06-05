import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
    const { title, description, techStack, liveUrl, githubUrl, imgPath } = project;

    return (
        <div className="project-card flex-shrink-0 w-[340px] bg-white rounded-2xl shadow-md shadow-zinc-300 overflow-hidden border border-zinc-100 hover:shadow-orange-300 hover:shadow-lg transition-shadow duration-300">

            {/* Project Image */}
            <div className="w-full h-44 overflow-hidden bg-zinc-100">
                <img
                    src={imgPath}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Card Body */}
            <div className="p-5 flex flex-col gap-3">

                {/* Title */}
                <h3 className="text-lg font-bold text-zinc-800">{title}</h3>

                {/* Description */}
                <p className="text-sm text-zinc-500 leading-relaxed line-clamp-3">{description}</p>

                {/* Tech Chips — same style as your skill chips */}
                <div className="flex flex-wrap gap-2 mt-1">
                    {techStack.map((tech, i) => (
                        <span
                            key={i}
                            className="text-xs px-3 py-1 rounded-full bg-orange-50 text-orange-500 border border-orange-200 font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-2">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-sm text-zinc-600 hover:text-orange-500 transition-colors duration-200 font-medium"
                        >
                            <FaGithub size={15} /> GitHub
                        </a>
                    )}
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-sm text-zinc-600 hover:text-orange-500 transition-colors duration-200 font-medium"
                        >
                            <FaExternalLinkAlt size={13} /> Live
                        </a>
                    )}
                </div>

            </div >
        </div >
    );
};

export default ProjectCard;