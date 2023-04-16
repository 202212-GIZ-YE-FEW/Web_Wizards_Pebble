import { Rubik } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NotVerfied from "@/components/NotVerfied";

import { useAuthContext } from "@/context/AuthContext";

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
    const { user } = useAuthContext();
    return (
        <div className={`${rubik.variable} font-sans`}>
            {user && !user.isVerified && <NotVerfied />}
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
