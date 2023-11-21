import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                title: "var(--font-bebas)",
            },
            animation: {
                bounce: "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
                slideUp: "slideUp 0.5s",
                slideUpEaseInOut: "slideUp 0.5s ease-in-out",
                slideUpCubiBezier:
                    "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
            },
            keyframes: {
                bounce: {
                    from: {transform: "translateY(10px)"},
                    to: {transform: "translateY(0)"},
                },
                slideUp: {
                    from: {transform: "translateY(100%)"},
                    to: {transform: "translateY(0)"},
                },
            },
        },
    },
    plugins: [],
};
export default config;
