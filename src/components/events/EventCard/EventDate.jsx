const EventDate = ({ EventDate }) => {
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
    const formattedDate = formatDate(EventDate);

    return <span>{formattedDate}</span>;
};

export default EventDate;
