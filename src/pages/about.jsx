import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import About from "@/components/About";

export default function AboutPage() {
    return (
        <>
            <About />
        </>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}
