import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Ending from "@/components/Ending";
import Gallery from "@/components/Gallery";
import Goals from "@/components/Goals";
import Hero from "@/components/Hero";
import How from "@/components/How";
import Volunteers from "@/components/Volunteers";

export default function HomePage() {
    const { t } = useTranslation("landing");

    return (
        <main>
            <Hero t={t} />
            <How t={t} />
            <Goals t={t} />
            <Volunteers t={t} />
            <Gallery />
            <Ending t={t} />
        </main>
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
