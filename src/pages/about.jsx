import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import About from "@/components/About";
import Team from "@/components/Team";
import Tech from "@/components/Tech";

export default function AboutPage() {
    const { t } = useTranslation("about");

    return (
        <>
            <About t={t} />
            <Team t={t} />
            <Tech t={t} />
        </>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "about"])),
            // Will be passed to the page component as props
        },
    };
}
