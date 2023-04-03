import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function NotFoundPage() {
    return <p className='text-center my-80 text-lg'>404</p>;
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props.
        },
    };
}
