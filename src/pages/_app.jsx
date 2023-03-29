import { Noto_Sans_Arabic } from "next/font/google";
import { appWithTranslation } from "next-i18next";

import "flatifycss/dist/css/flatify-min.css";
import "@/styles/globals.css";

const notoSansArabic = Noto_Sans_Arabic({
    subsets: ["arabic"],
    variable: "--font-noto",
});

function MyApp({ Component, pageProps }) {
    return (
        <div className={`${notoSansArabic.variable} font-sans`}>
            <Component {...pageProps} />;
        </div>
    );
}

export default appWithTranslation(MyApp);
