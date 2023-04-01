import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "@/layout/Layout";

export default function NotFoundPage() {
    return <Layout>404</Layout>;
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props.
        },
    };
}
