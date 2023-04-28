const EventAttendees = ({ attendees, t, style }) => {
    return (
        <div style={{ display: "flex", gap: "6px" }}>
            <div style={{ marginInlineEnd: "10px" }}>
                {attendees?.slice(0, 3).map((item, index) => (
                    <a
                        href='#'
                        key={index}
                        className={
                            "!bg-black-100 !text-white rounded-full px-2 py-1 !transition-all " +
                            style
                        }
                    >
                        {item.charAt(0)}
                    </a>
                ))}
            </div>
            {attendees?.length > 0 ? (
                <span>
                    {" "}
                    + {attendees.length - 3} {t("attendees")}
                </span>
            ) : (
                <span>0 {t("attendees")}</span>
            )}
        </div>
    );
};

export default EventAttendees;
