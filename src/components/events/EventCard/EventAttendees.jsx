const EventAttendees = ({ attendees, t }) => {
    const attendeeCount = attendees?.length || 0;
    return (
        <div className='flex -space-x-2 overflow-hidden'>
            {attendees?.slice(0, 3).map((item, index) => (
                <a
                    href='#'
                    key={index}
                    className='inline-block flex justify-center !no-underline  w-6 h-6 md:h-7 md:w-7 rounded-full ring-2 ring-white bg-gray-900  '
                >
                    {item.charAt(0)}
                </a>
            ))}
            {attendeeCount > 3 ? (
                <span className='pl-3'>
                    + {attendees.length - 3} {t("attendees")}
                </span>
            ) : (
                <span className='px-4'>
                    {attendeeCount} {t("attendees")}
                </span>
            )}
        </div>
    );
};

export default EventAttendees;
