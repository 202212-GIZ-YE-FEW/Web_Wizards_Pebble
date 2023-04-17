import { appWithTranslation } from "next-i18next";
import { useEffect } from "react";

import "flatifycss/dist/css/flatify-min.css";
import "@/styles/globals.css";
import "@/styles/events.css";

import { AuthContextProvider } from "@/context/AuthContext";
import Layout from "@/layout/Layout";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const importTE = async () => {
            await import("tw-elements");
        };
        importTE();
    }, []);
    return (
        <AuthContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AuthContextProvider>
    );
}

export default appWithTranslation(MyApp);
