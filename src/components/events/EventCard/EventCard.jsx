import React from "react";

import styles from "./EventCard.module.scss";

import EventsDescription from "@/components/events/EventCard/EventsDescription";

import EventAttendees from "./EventAttendees";
import EventDate from "./EventDate";
import EventsImage from "./EventsImage";
import EventsTitle from "./EventsTitle";

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
