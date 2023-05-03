const EventsTitle = ({ title }) => {
    const shortTitle = title?.slice(0, 30) + "...";
    const longTitle = title?.slice(0, 40) + "...";

    return (
        <h2 className='card-title font-bold py-1 text-lg '>
            <span className='hidden sm:inline'>{longTitle}</span>
            <span className='inline sm:hidden'>{shortTitle}</span>
        </h2>
    );
};

export default EventsTitle;
