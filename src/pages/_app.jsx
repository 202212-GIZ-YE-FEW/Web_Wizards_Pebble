import { appWithTranslation } from "next-i18next";

import "flatifycss/dist/css/flatify-min.css";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
