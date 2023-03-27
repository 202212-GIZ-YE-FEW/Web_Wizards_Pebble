/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
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
            },
            fontFamily: {
                sans: ["var(--font-noto)", ...fontFamily.sans],
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
