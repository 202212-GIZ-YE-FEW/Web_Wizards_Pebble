/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

module.exports = {
    images: {
        domains: ["lh3.googleusercontent.com"],
    },
    i18n,
    eslint: {
        dirs: ["src"],
    },
    reactStrictMode: true,
};
