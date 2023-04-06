/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.DOMAIN_URL,
    generateRobotsTxt: process.env.DOMAIN_URL ? true : false,
};
