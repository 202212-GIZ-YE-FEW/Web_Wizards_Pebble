import { Noto_Sans_Arabic } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const notoSansArabic = Noto_Sans_Arabic({
    subsets: ["arabic"],
    variable: "--font-noto",
});

export default function Layout({ i18n, children }) {
    return (
        <div className={`${notoSansArabic.variable} font-sans`}>
            <Navbar lang={i18n.language.toUpperCase()} />
            {children}
            <Footer />
        </div>
    );
}
