import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0f172a",
                secondary: "#1e293b",
                accent: "#3b82f6",
            },
            animation: {
                "fade-in": "fadeIn 0.8s ease-in",
                "slide-up": "slideUp 0.6s ease-out",
                float: "float 3s ease-in-out infinite",
                glow: "glow 2s ease-in-out infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(30px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                glow: {
                    "0%, 100%": { boxShadow: "0 0 5px rgba(59, 130, 246, 0.5)" },
                    "50%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
