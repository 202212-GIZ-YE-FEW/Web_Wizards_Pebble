import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "@/layout/Layout";

export default function HomePage() {
    const { t, i18n } = useTranslation("common");

    return (
        <Layout i18n={i18n}>
            <header className='container p-4'>
                <p>{t("test")}</p>
                <div
                    className='pb-96'
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                    }}
                >
                    <Link href='/' locale='en'>
                        English
                    </Link>
                    <Link href='/' locale='ar'>
                        العربية
                    </Link>
                </div>
                <div className='pb-96'></div>
            </header>
        </Layout>
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
