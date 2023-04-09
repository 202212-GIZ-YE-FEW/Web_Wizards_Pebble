import { appWithTranslation } from "next-i18next";

import "flatifycss/dist/css/flatify-min.css";
import "@/styles/globals.css";
import "@/styles/events.css";

import Layout from "@/layout/Layout";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const importTE = async () => {
            await import("tw-elements");
        };
        importTE();
    }, []);
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default appWithTranslation(MyApp);
