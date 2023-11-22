"use client";
import Image from "next/image";
import {Link} from "react-scroll";

import {HiArrowDown} from "react-icons/hi";

import pp from "../../public/images/pp.jpg";

const HeroSection = () => {
    return (
        <section id="home">
            <div className="flex flex-col md:flex-row md:space-x-4 md:text-left text-center justify-center items-center my-44 max-md:my-28 ">
                <div className="md:w-1/2 md:mt-2">
                    <Image
                        src={pp}
                        width={300}
                        height={300}
                        alt="Hero Section Image"
                        className="rounded-full shadow-2xl"></Image>
                </div>
                <div className="md:w-3/5 max-md:mt-5">
                    <h1 className="font-bold text-5xl max-md:text-4xl md:mt-0">
                        Hi, I&#39;m Hossam!
                    </h1>
                    <p className="text-lg mt-4 mb-6 md:text-2xl">
                        I&#39;m a{" "}
                        <span className="font-semibold text-teal-600">
                            Software Developer{" "}
                        </span>
                        based in Cairo, Working towards creating software that
                        makes life easier and more meaningful&#46;
                    </p>
                    <Link
                        to="projects"
                        className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 hover:cursor-pointer transition-all duration-300"
                        activeClass="active"
                        spy={true}
                        smooth="true"
                        offset={-100}
                        duration={500}>
                        Projects
                    </Link>
                    <a
                        href="/CV.pdf"
                        download
                        className="text-neutral-100 font-semibold px-6 py-3 ml-4 bg-blue-500 rounded shadow hover:bg-blue-700 transition-all duration-300 hover:cursor-pointer">
                        Download resume
                    </a>
                </div>
            </div>

            <div className="flex flex-row justify-center mb-20">
                <Link
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>
                    <HiArrowDown
                        size={35}
                        className="animate-bounce hover:cursor-pointer"
                    />
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;
