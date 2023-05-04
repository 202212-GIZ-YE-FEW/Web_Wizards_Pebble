import EventsDescription from "@/components/events/EventCard/EventsDescription";

import EventAttendees from "./EventAttendees";
import EventDate from "./EventDate";
import EventsImage from "./EventsImage";
import EventsTitle from "./EventsTitle";

function EventCard({ event, t }) {
    return (
        <div className='py-4'>
            <article className='border-2 border-gray-900 rounded-lg py-2 px-3 relative'>
                <div className='flex flex-row justify-between py-1'>
                    <EventDate EventDate={event.date} />
                    <EventAttendees attendees={event.attendees} t={t} />
                </div>
                <div className='flex flex-row py-1'>
                    <div>
                        <EventsImage eventImg={event.image} />
                    </div>
                    <div className='px-2 flex-grow'>
                        <div className='flex flex-col h-full'>
                            <div className='flex-grow px-1'>
                                <EventsTitle title={event.title} />
                                <EventsDescription
                                    description={event.description}
                                />
                            </div>
                            <div className='flex justify-end items-end '>
                                <a
                                    href={`/events/${event.id}`}
                                    className='bg-primary-200 hover:bg-[#fe9437] !text-white font-bold py-2 px-9 rounded-lg'
                                >
                                    {t("join")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default EventCard;
