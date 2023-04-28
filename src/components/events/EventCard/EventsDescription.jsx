const EventsDescription = ({ description }) => {
    const shortDescription = description?.slice(0, 100) + "...";

    return <p>{shortDescription}</p>;
};

export default EventsDescription;
