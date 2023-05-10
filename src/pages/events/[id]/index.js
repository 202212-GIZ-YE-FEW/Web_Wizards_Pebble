import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";

import Attendees from "@/components/event/Attendees";
import EventDescription from "@/components/event/EventDescription";
import EventDetails from "@/components/event/EventDetails";
import EventImage from "@/components/event/EventImage";
import JoinButton from "@/components/event/JoinButton";

import { useAuthContext } from "@/context/AuthContext";
import useFirestore from "@/firebase/firestore";

const Event = () => {
    const router = useRouter();
    const { id } = router.query;

    const eventsHook = useFirestore("events");
    const event = eventsHook.getDocumentById(id);
    const { user } = useAuthContext();
    useEffect(() => {
        // Check if the code is running on the client-side
        if (!user && event) {
            // Redirect the user to the sign-in page if not authenticated
            router.push("/signin");
        }
    }, [user, event]);

    if (!user) {
        // Display a message and a link to the sign-in page if the user is not authenticated
        return (
            <div className='lg:px-28 px-12'>
                <p>You need to sign in to view this event</p>
            </div>
        );
    }

    return (
        <div className='lg:px-28 px-12 '>
            <div className=' lg:text-3xl text-2xl font-sans font-semibold text-black-100 tracking-wide'>
                <h2>{event?.title}</h2>
            </div>

            <div className='flex lg:flex-row flex-col'>
                <EventImage imageUrl={event?.image} />
                <div className='order-2 flex flex-col justify-start lg:items-start lg:px-16 lg:py-16 py-8'>
                    <EventDetails eventData={event} />
                    <JoinButton eventId={event?.id} />
                </div>
            </div>
            <div className='flex lg:flex-row flex-col lg:py-16 '>
                <EventDescription eventData={event} />
                <Attendees eventData={event} />
            </div>
        </div>
    );
};
export async function getStaticPaths() {
    return { paths: [], fallback: true };
}

export default Event;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "event"])),
            // Will be passed to the page component as props
        },
    };
}
