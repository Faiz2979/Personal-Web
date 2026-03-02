import { Link } from "lucide-react";
import { FiArrowUpRight } from "react-icons/fi";
import { projectsFeatured } from "../../content/projectfeatured";
import Section from "../../global/Wrapper";
import { ProjectCard } from "../parts/cards/project-card";
const projects = projectsFeatured;

export default function Projects() {
    return (
        <Section id="projects" className="flex flex-col items-center gap-10 oxanium-regular bg-[#0e0202] ">
            <h1 className="text-center text-white font-semibold text-2xl md:text-4xl">
                Featured Projects
            </h1>
            <div className="w-full flex flex-wrap gap-4 items-center justify-center">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
            <div className="underline rounded-md flex items-center justify-center gap-2">
                <Link className="flex col-span-1 items-center gap-2 p-4 oxanium oxanium-semibold text-2xl text-red-600" href="/projects">
                    More Projects <FiArrowUpRight className="text-2xl undeline" />
                </Link>

            </div>
        </Section>
    );
}