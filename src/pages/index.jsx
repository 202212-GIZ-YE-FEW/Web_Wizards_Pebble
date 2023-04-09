import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Goals from "@/components/Goals";
import Hero from "@/components/Hero";
import How from "@/components/How";
import Volunteers from "@/components/Volunteers";

export default function HomePage() {
    const { t } = useTranslation("landing");

    return (
        <>
            <Hero t={t} />
            <How t={t} />
            <Goals t={t} />
            <Volunteers t={t} />
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
