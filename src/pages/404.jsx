import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { GetStartedButton } from "@/components/mini";

export default function NotFoundPage() {
    const { t } = useTranslation("common");

    return (
        <div className='flex flex-col items-center h-screen'>
            <Image
                src='/Images/404.png'
                alt='About Page Image'
                width={800}
                height={800}
            />
            <GetStartedButton>{t("HomePage")}</GetStartedButton>
        </div>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props.
        },
    };
}
