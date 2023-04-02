import { Noto_Sans_Arabic, Rubik } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const notoSansArabic = Noto_Sans_Arabic({
    subsets: ["arabic"],
    variable: "--font-noto",
});

const rubik = Rubik({
    subsets: ["latin"],
    variable: "--font-rubik",
});

export default function Layout({ i18n, children }) {
    const language = i18n.language;
    // Having a font fallback by adding the two fonts in the className doesn't work, so this is needed.
    // TODO: figure why fallback isn't working correctly to increase performance.
    const font = language == "en" ? rubik : notoSansArabic;
    return (
        <div className={`${font.variable} ${font.variable} font-sans`}>
            <Navbar lang={language.toUpperCase()} />
            {children}
            <Footer />
        </div>
    );
}
