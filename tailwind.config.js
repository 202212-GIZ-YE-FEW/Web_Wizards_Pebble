/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/tw-elements/dist/js/**/*.js"
    ],    theme: {
        container: {
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                md: "3rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "7rem",
            },
            center: true,
        },
        extend: {
            colors: {
                primary: {
                    100: "#FBC495",
                    200: "#FDA855",
                },
                secondary: {
                    100: "#BDD6D0",
                    200: "#29C5E6",
                    300: "#0180AB",
                },
                black: {
                    50: "#878787",
                    100: "#1A1A1A",
                },
            },
            fontFamily: {
                sans: ["var(--font-rubik)", ...fontFamily.sans],
            },
        },
    },
    plugins: [require("@tailwindcss/forms"),
     require("tailwind-scrollbar"),
     require("tw-elements/dist/plugin")
    ]
};
