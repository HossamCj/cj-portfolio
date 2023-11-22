import type {Metadata} from "next";
import {Inter} from "next/font/google";

import ThemeProvider from "./provider";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Favicon from "./favicon.ico";

import "./globals.css";
import Head from "next/head";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "HossamCj's Portfolio",
    description:
        "HossamCj's Portfolio is a personal website showcasing the work of Hossam, a Software Developer. Explore Hossam's personal projects, professional experience, internships, and skills presented in a polished and professional manner. Visitors have the option to download Hossam's Resume/CV for more details.",
    icons: [{rel: "icon", url: Favicon.src}],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className={`${inter.className} dark:bg-stone-900 `}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem>
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
