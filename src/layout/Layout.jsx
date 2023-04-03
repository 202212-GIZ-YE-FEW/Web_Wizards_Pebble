import { Rubik } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// TODO: figure out why fallback doesn't work with rubik and noto.
// const notoSansArabic = Noto_Sans_Arabic({
//     subsets: ["arabic"],
//     variable: "--font-noto",
// });

const rubik = Rubik({
    subsets: ["latin"],
    variable: "--font-rubik",
});

export default function Layout({ children }) {
    return (
        <div className={`${rubik.variable} font-sans`}>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
