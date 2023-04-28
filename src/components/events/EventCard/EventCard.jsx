import React from "react";

import styles from "./EventCard.module.scss";

import EventsDescription from "@/components/events/EventCard/EventsDescription";

import EventAttendees from "./EventAttendees";
import EventDate from "./EventDate";
import EventsImage from "./EventsImage";
import EventsTitle from "./EventsTitle";
const eventsList = [
    {
        id: 1,
        date: "FRI, JUL -7:00 PM GMT+3",
        attendees: ["A", "B", "C", "D", "E"],
        attendeesNumber: "+12",
        title: "Title of the Event",
        description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.",
        image: "event1.png",
    },
];

function EventCard({ event, t, keyValue }) {
    return (
        <div className='py-4'>
            <article
                className={"horizontal card " + styles.card}
                key={keyValue}
            >
                <div className={styles.cardBadges}>
                    <EventDate EventDate={event.date} />
                    <EventAttendees
                        attendees={event.attendees}
                        t={t}
                        style={styles.badge}
                    />
                </div>
                <EventsImage eventImg={event.image} />
                <div className='card-right'>
                    <div className='card-body'>
                        <EventsTitle title={event.title} />
                        <EventsDescription description={event.description} />
                    </div>

                    <footer className='card-footer'>
                        <a
                            href={`/events/${event.id}`}
                            className='bg-[#FDA855] hover:bg-[#e38b33] !text-white font-bold py-2 px-8 rounded-lg push-right'
                        >
                            {t("join")}
                        </a>
                    </footer>
                </div>
            </article>
        </div>
    );
}

export default EventCard;
