function formatDate(dateObj) {
    let date;
    if (dateObj && dateObj.toDate) {
        date = dateObj.toDate();
    } else {
        date = new Date(dateObj * 1000);
    }
    const options = {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZoneName: "short",
    };
    return date.toLocaleString("en-US", options);
}
const EventDate = ({ eventDate, icon }) => {
    const formattedDate = formatDate(eventDate);

    return (
        <div className='flex items-center'>
            {icon}
            <span className='ml-2'>{formattedDate}</span>
        </div>
    );
};

export default EventDate;
