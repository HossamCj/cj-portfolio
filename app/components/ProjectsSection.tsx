import Image from "next/image";
import Link from "next/link";
import {BsGithub, BsArrowUpRightSquare} from "react-icons/bs";

import jsNotesProject from "../../public/images/projectsImages/jsNotesProject.png";
import jsTodoProject from "../../public/images/projectsImages/jsTodoProject.png";
import reactShopProject1 from "../../public/images/projectsImages/reactShopProject1.png";

import SlideUp from "./SlideUp";

const projects = [
    {
        name: "Todo App",
        description:
            "Clean and intuitive Todo App built with vanilla JavaScript for seamless task management.",
        github: "https://github.com/HossamCj/Kalbonyan-Elmarsos-2/tree/main/02-Udemy/2-Js-Andrew/Projects/3-todo-app",
        demo: "https://todo-app-kalbonyan.netlify.app/",
        image: jsTodoProject,
    },
    {
        name: "Effortless Note Keeper",
        description:
            "A dynamic Notes App with real-time saving, instant updates on key press, and versatile filtering options for efficient organization.",
        github: "https://github.com/HossamCj/Kalbonyan-Elmarsos-2/tree/main/02-Udemy/2-Js-Andrew/Projects/2-notes-app",
        demo: "https://notes-app-kalbonyan.netlify.app/index.html",
        image: jsNotesProject,
    },
    {
        name: "CROWN Shop",
        description:
            "CROWN Shop - A feature-rich React e-commerce platform offering seamless navigation, dynamic category pages, intuitive cart management, and secure user authentication for a personalized shopping experience.",
        github: "https://github.com/HossamCj/Kalbonyan-Elmarsos-2/tree/main/02-Udemy/3-Reactjs-ZTM/Projects/CRWN-Clothing-Store",
        demo: "https://allen-clothing.netlify.app/",
        image: reactShopProject1,
    },
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="mb-10">
            <h1 className="text-center font-bold text-4xl">
                Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>

            <div className="flex flex-col space-y-28">
                {projects.map((project, idx) => (
                    <div key={idx}>
                        <SlideUp offset="-300px 0px -300px 0px">
                            <div className="flex flex-col md:flex-row md:space-x-12 animate-slideUpCubiBezier animation-delay-2">
                                <div className="md:w-1/2 mt-8">
                                    <Link href={project.demo} target="_blank">
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            width={1000}
                                            height={1000}
                                            className="rounded-xl shadow-xl hover:opacity-80"></Image>
                                    </Link>
                                </div>
                                <div className="md:w-1/2 mt-12">
                                    <h1 className="text-2xl font-bold mb-6">
                                        {project.name}
                                    </h1>
                                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-row align-bottom space-x-4">
                                        <Link
                                            href={project.github}
                                            target="_blank">
                                            <BsGithub
                                                size={30}
                                                className="hover:-translate-y-1 transition-transform cursor-pointer"
                                            />
                                        </Link>
                                        <Link
                                            href={project.demo}
                                            target="_blank">
                                            <BsArrowUpRightSquare
                                                size={30}
                                                className="hover:-translate-y-1 transition-transform cursor-pointer"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
