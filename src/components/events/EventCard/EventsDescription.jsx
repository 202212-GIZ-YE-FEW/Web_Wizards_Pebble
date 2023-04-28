const EventsDescription = ({ description }) => {
    const shortDescription = description?.slice(0, 50) + "...";
    const longDescription = description?.slice(0, 100) + "...";

    return (
        <p className='text-sm'>
            <span className='hidden sm:inline'>{longDescription}</span>
            <span className='inline sm:hidden'>{shortDescription}</span>
        </p>
    );
};

export default EventsDescription;
