import React from "react";

import {AiOutlineGithub, AiOutlineLinkedin} from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
            <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
            <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
                <div className="text-[#24292F] dark:text-neutral-100">
                    &copy; 2023 HossamCj
                </div>
                <div className="flex flex-row items-center justify-center space-x-2 mb-1">
                    <a
                        href="https://github.com/HossamCj/"
                        rel="noreferrer"
                        target="_blank">
                        <AiOutlineGithub
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-[#24292F]"
                            size={30}></AiOutlineGithub>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/hossam-hassan-mohamed-738420145/"
                        rel="noreferrer"
                        target="_blank">
                        <AiOutlineLinkedin
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-[#0A66C2]"
                            size={30}></AiOutlineLinkedin>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
