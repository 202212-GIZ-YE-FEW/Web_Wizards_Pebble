import Image from "next/image";
import React from "react";

import styles from "./EventCard.module.scss";

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
    function formatDate(dateObj) {
        const date = new Date(
            dateObj?.seconds * 1000 + dateObj?.nanoseconds / 1000000
        );
        const options = {
            weekday: "short",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            timeZoneName: "short",
        };
        return date.toLocaleString("en-US", options);
    }

    const formattedDate = formatDate(event.date);
    return (
        <>
            <article
                className={"horizontal card " + styles.card}
                key={keyValue}
            >
                <div className={styles.cardBadges}>
                    <span>{formattedDate}</span>
                    <div style={{ display: "flex", gap: "6px" }}>
                        <div style={{ marginInlineEnd: "10px" }}>
                            {event?.attendees
                                ?.slice(0, 3)
                                .map((item, index) => (
                                    <a
                                        href='#'
                                        key={index}
                                        className={
                                            "!bg-black-100 !text-white rounded-full px-2 py-1 !transition-all " +
                                            styles.badge
                                        }
                                    >
                                        {item.charAt(0)}
                                    </a>
                                ))}
                        </div>
                        {event?.attendees?.length > 0 ? (
                            <span>
                                {" "}
                                + {event.attendees.length - 3} {t("attendees")}
                            </span>
                        ) : (
                            <span>0 {t("attendees")}</span>
                        )}
                    </div>
                </div>
                <header className='card-header'>
                    <Image
                        className='card-image'
                        src={`/Images/events/${event.image}`}
                        alt='Card image'
                        width='200'
                        height='200'
                    />
                </header>
                <div className='card-right'>
                    <div className='card-body'>
                        <h2 className='card-title font-bold'></h2>
                        {event.description}
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
        </>
    );
}

export default EventCard;
