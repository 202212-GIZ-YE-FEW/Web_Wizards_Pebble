import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function NotFoundPage() {
    return <h1 className='text-center !my-80 text-6xl font-sans'>404</h1>;
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props.
        },
    };
}
