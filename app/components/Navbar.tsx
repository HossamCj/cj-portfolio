"use client"; // This is a client component

import React, {useState} from "react";
import {Link} from "react-scroll";
import {usePathname} from "next/navigation";
import {IoMdMenu, IoMdClose} from "react-icons/io";

import ThemeProvider from "./ThemeSwitch/index";

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Home",
        page: "home",
    },
    {
        label: "About",
        page: "about",
    },
    {
        label: "Projects",
        page: "projects",
    },
];
const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <header className="w-full mx-auto bg-white sm:px-20 shadow fixed top-0 z-50 dark:bg-stone-900 dark:border-b dark:border-stone-600">
            <nav className="justify-between md:items-center md:flex">
                <div className="flex items-center justify-between">
                    <div className="md:py-5 md:block">
                        <h2 className="text-2xl font-bold">Hossam CJ</h2>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setNavbar(!navbar)}>
                            {navbar ? (
                                <IoMdClose size={30} />
                            ) : (
                                <IoMdMenu size={30} />
                            )}
                        </button>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}>
                        <div className="md:flex space-y-7 md:space-y-0 md:space-x-6">
                            {NAV_ITEMS.map((item, idx) => (
                                <Link
                                    key={idx}
                                    to={item.page}
                                    className={
                                        "block lg:inline-block text-neutral-500 dark:text-neutral-100"
                                    }
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    onClick={() => setNavbar(!navbar)}>
                                    {item.label}
                                </Link>
                            ))}
                            <ThemeProvider />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
