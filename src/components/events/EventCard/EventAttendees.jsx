const EventAttendees = ({ attendees, t, style }) => {
    return (
        <div className='flex -space-x-2 overflow-hidden'>
            {attendees?.slice(0, 3).map((item, index) => (
                <a
                    href='#'
                    key={index}
                    className='inline-block w-6 h-6 md:h-7 md:w-7 rounded-full ring-2 ring-white bg-gray-900  '
                >
                    {item.charAt(0)}
                </a>
            ))}
            {attendees?.length > 0 ? (
                <span className='pl-3'>
                    + {attendees.length - 3} {t("attendees")}
                </span>
            ) : (
                <span className='ml-1'>0 {t("attendees")}</span>
            )}
        </div>
    );
};

export default EventAttendees;
