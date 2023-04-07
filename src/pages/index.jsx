import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Hero from "@/components/Hero";
import How from "@/components/How";

export default function HomePage() {
    const { t } = useTranslation("landing");

    return (
        <>
            <Hero t={t} />
            <How t={t} />
        </>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "landing"])),
            // Will be passed to the page component as props
        },
    };
}
