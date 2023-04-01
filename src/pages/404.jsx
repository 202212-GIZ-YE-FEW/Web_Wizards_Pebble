import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "@/layout/Layout";

export default function NotFoundPage() {
    const { i18n } = useTranslation("common");
    return <Layout i18n={i18n}>404</Layout>;
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props.
        },
    };
}
