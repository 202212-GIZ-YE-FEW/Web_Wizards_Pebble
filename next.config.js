const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        domains: [
            "lh3.googleusercontent.com",
            "firebasestorage.googleapis.com",
        ],
    },
    i18n,
    eslint: {
        dirs: ["src"],
    },
    reactStrictMode: true,
};
