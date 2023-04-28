import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import EventCreation from "@/components/LocationSelector/EventCreation";

const EventCreationPage = () => {
    const { t } = useTranslation("eventCreation");
    return (
        <div>
            <EventCreation t={t} />
        </div>
    );
};

export default EventCreationPage;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "eventCreation",
                "interests",
            ])),
        },
    };
}
