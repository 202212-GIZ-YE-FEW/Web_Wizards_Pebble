import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";

import EventCreation from "@/components/LocationSelector/EventCreation";

import { useAuthContext } from "@/context/AuthContext";

const EventCreationPage = () => {
    const router = useRouter();
    const { t } = useTranslation("eventCreation");

    const { user } = useAuthContext();
    console.log(user);
    useEffect(() => {
        // Check if the code is running on the client-side
        if (user) {
            // Redirect the user to the sign-in page if not authenticated
            router.push("/events/create");
        }
    }, [user]);

    if (!user) {
        return (
            <div className='lg:px-28 px-12'>
                <p>You need to sign in to view event creation page</p>
            </div>
        );
    }

    return (
        <div>
            <EventCreation t={t} user={user} />
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
