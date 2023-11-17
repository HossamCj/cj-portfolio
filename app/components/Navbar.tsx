"use client"; // This is a client component

import React, {useState} from "react";
import {Link} from "react-scroll/modules";
import {usePathname} from "next/navigation";
import {useTheme} from "next-themes";
import {RiMoonFill, RiSunLine} from "react-icons/ri";
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
        <header className="w-full mx-auto bg-white shadow fixed top-0 z-50 dark:bg-stone-900 dark:border-b dark:border-stone-600">
            <nav className="justify-between md:items-center md:flex">
                <div className="md:py-5 md:block">
                    <h2 className="text-2xl font-bold">Hossam CJ</h2>
                </div>
                <div className="md:flex md:space-x-6">
                    {NAV_ITEMS.map((item, idx) => (
                        <a key={idx}>{item.label}</a>
                    ))}
                    <ThemeProvider />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
