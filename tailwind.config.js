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
                black: {
                    50: "#878787",
                    100: "#1A1A1A",
                },
            },
            fontFamily: {
                sans: [
                    "var(--font-rubik)",
                    ...fontFamily.sans,
                ],
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
