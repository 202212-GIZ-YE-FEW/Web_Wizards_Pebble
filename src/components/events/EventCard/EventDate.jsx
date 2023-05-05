const EventDate = ({ eventDate, icon }) => {
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
    const formattedDate = formatDate(eventDate);

    return (
        <div className='flex items-center'>
            {icon}
            <span className='ml-2'>{formattedDate}</span>
        </div>
    );
};

export default EventDate;
