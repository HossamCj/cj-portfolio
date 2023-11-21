import React from "react";
import Image from "next/image";

const skills = [
    {skill: "HTML"},
    {skill: "CSS"},
    {skill: "Tailwind CSS"},
    {skill: "JavaScript"},
    {skill: "Python"},
    {skill: "React"},
    {skill: "Next.js"},
    {skill: "Git"},
    {skill: "GitHub"},
    {skill: "Node.js"},
    {skill: "Express"},
    {skill: "MongoDB"},
];

const AboutSection = () => {
    return (
        <section id="about" className="">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl">
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>
                <div className="flex flex-col space-y-10 items-stretch align-top justify-center md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
                    <div className="md:w-1/2">
                        {/* About me Section */}
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left max-sm:text-xl">
                            Get to know me!
                        </h1>
                        <p>
                            My name is Hossam Hassan, a{" "}
                            <span className="font-bold">highly ambitious</span>{" "}
                            and {/* <br className="max-sm:flex hidden" /> */}
                            <span className="font-bold">
                                self-motivated
                            </span>{" "}
                            software developer based in Cairo&#46;
                        </p>
                        <br />
                        <p>
                            bringing three years of dedicated
                            Software-Development/Frontend-Development studies
                            experience.
                        </p>
                        <br />
                        <p>
                            Proficient in{" "}
                            <span className="font-bold">HTML</span>,{" "}
                            <span className="font-bold">CSS</span>,{" "}
                            <span className="font-bold">JavaScript</span>,{" "}
                            <span className="font-bold">React</span>,{" "}
                            <span className="font-bold">ReduxToolkit</span>,{" "}
                            <span className="font-bold">Next.js</span>, and{" "}
                            <span className="font-bold">Tailwind CSS</span>,
                            <span className="font-bold">Python</span>,
                            <span className="font-bold">Git</span>,
                            <span className="font-bold">GitHub</span>,
                            <span className="font-bold">Node&#46;js</span>,
                            <span className="font-bold">Express</span>,
                            <span className="font-bold">MongoDB</span>, with a
                            <span className="font-bold dark:text-red-400 text-red-500">
                                {" "}
                                Strong foundation in software engineering
                                principles
                            </span>
                            . Beyond coding, I delve into diverse subjects, from{" "}
                            <span className="font-bold">history</span> and{" "}
                            <span className="font-bold">religion</span> to
                            technical topics. Committed to{" "}
                            <span className="font-bold">continuous growth</span>{" "}
                            and technological advancement, I eagerly anticipate
                            the trajectory of my career and welcome new
                            opportunities. Let&#39;s connect and explore
                            possibilities together! 👨‍💻✨
                        </p>
                    </div>

                    {/* Skills Section */}
                    <div className="md:w-1/2">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                            My Skills
                        </h1>
                        <div className="flex flex-wrap flex-row justify-center items-center md:justify-start">
                            {skills.map((item, idx) => (
                                <p
                                    key={idx}
                                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-teal-700 rounded font-semibold hover:cursor-pointer hover:bg-teal-500 dark:hover:bg-teal-500 hover:text-white dark:hover:text-gray-200 transition-all duration-300 ease-in-out">
                                    {item.skill}
                                </p>
                            ))}
                        </div>

                        {/* <Image src={} alt={}></Image> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
